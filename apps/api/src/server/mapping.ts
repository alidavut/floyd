import { AuthorizationError, InputError, NotFoundError, ServiceError } from 'services/errors';
import { NextFunction, Request, Response } from 'express';
import { Auth } from 'services/auth';
import { createHTTPService } from 'services/service';
import { EntityNotFoundError } from 'typeorm';
import dataSource from 'lib/data-source';

export function mapService(service: ReturnType<typeof createHTTPService>) {
  return async (req: Request, res: Response, next: NextFunction) => {
    const params = { ...req.query, ...req.body, ...req.params };

    try {
      const accessToken = findAccessToken(req);
      const auth = await Auth.create({ token: accessToken });
      const result = await service(params, { auth, context: { request: req } });
      res.json(result);
    } catch (error) {
      if (error instanceof InputError) {
        return res.status(422).json({ errors: error.issues });
      } else if (error instanceof AuthorizationError) {
        return res.status(401).json({ error: error.message });
      } else if (error instanceof NotFoundError) {
        return res.status(404).json({ error: error.message });
      } else if (error instanceof ServiceError) {
        return res.status(400).json({ error: error.message });
      } else if (error instanceof EntityNotFoundError) {
        const name = dataSource.entityMetadatasMap.get(error.entityClass).name;
        return res.status(404).json({ error: `${name} not found` });
      }

      next(error);
    }
  }
}

function findAccessToken(req: Request) {
  const authorization = req.headers.authorization;

  if (authorization && authorization.startsWith('Bearer ')) {
    return authorization.slice(7);
  }

  return null;
}
