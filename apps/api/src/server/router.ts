import { Router } from 'express';
import { mapService } from './mapping';
import services from 'services';

const router: Router = Router();

router.post('/auth', mapService(services.auth.create));
router.post('/auth/send-otp', mapService(services.auth.sendOtp));

router.post('/users', mapService(services.user.create));
router.get('/users/:id', mapService(services.user.get));
router.post('/users/send-email-verification', mapService(services.user.sendEmailVerification));
router.post('/users/verify-email', mapService(services.user.verifyEmail));

router.get('/channels', mapService(services.channel.list));
router.post('/channels', mapService(services.channel.create));
router.get('/channels/:id', mapService(services.channel.get));
router.put('/channels/:id', mapService(services.channel.update));
router.post('/channels/:channelId/stripe/setup', mapService(services.channel.setupStripe));
router.post('/channels/:channelId/stripe/verify', mapService(services.channel.verifyStripe));

export default router;
