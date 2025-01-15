import { Router } from 'express';
import { mapService } from './mapping';
import services from 'services';

const router: Router = Router();

router.post('/auth', mapService(services.auth.create));
router.post('/auth/send_otp', mapService(services.auth.sendOtp));

router.post('/users', mapService(services.user.create));
router.get('/users/:id', mapService(services.user.get));

router.get('/channels', mapService(services.channel.list));
router.post('/channels', mapService(services.channel.create));
router.get('/channels/:id', mapService(services.channel.get));
router.patch('/channels/:id', mapService(services.channel.update));

router.get('/events', mapService(services.event.list));
router.post('/events', mapService(services.event.create));
router.get('/events/:id', mapService(services.event.get));
router.patch('/events/:id', mapService(services.event.update));

export default router;
