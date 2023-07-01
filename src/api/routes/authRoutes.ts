import { Router } from 'express';
import { Routes } from 'types/types';

const router = Router();

router.post(`/${Routes.signup}`, () => {});
router.post(`/${+Routes.login}`, () => {});

export default router;
