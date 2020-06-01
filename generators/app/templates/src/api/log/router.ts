import * as Router from 'koa-router';
import controller from './controller';
import { isAuthenticated, OwnsOrHasRole } from '../../auth/service';


let router = new Router({
    prefix: '/api/logs'
});

router.get('/',isAuthenticated(), controller.index);

router.post('/', controller.create);

router.get('/:id', controller.show);

router.put('/:id', controller.update);

router.patch('/:id', controller.update);

router.delete('/:id', controller.destroy);

export default router;