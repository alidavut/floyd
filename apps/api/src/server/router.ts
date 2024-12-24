import { Router } from 'express';
import { mapService } from './mapping';
import services from 'services';

const router: Router = Router();

router.post('/auth', mapService(services.auth.create));
router.post('/auth/send_otp', mapService(services.auth.sendOtp));

router.post('/users', mapService(services.user.create));
router.get('/users/:id', mapService(services.user.get));

export default router;
