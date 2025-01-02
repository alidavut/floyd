import { BaseEntity } from 'entities/base';
import { startCase } from 'lodash';
import { Not } from 'typeorm';
import { z } from 'zod';

export function unique(entityClass: typeof BaseEntity, fields: string[], message?: string) {
  return async (value: { [x: string]: unknown }, ctx: z.RefinementCtx) => {
    const query = {
      where: {}
    };

    if (value['id']) {
      query.where['id'] = Not(value['id']);
    }

    for (const field of fields) {
      query.where[field] = value[field];
    }

    const count = await entityClass.count(query);

    if (count > 0) {
      for (const field of fields) {
        ctx.addIssue({
          code: 'custom',
          path: [field],
          message: message ?? `${startCase(field)} already exists`
        });
      }
    }
  };
}
