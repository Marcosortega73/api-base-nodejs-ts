import { Router } from "express";
import { readdirSync } from "fs";

const PATH_ROUTES = `${__dirname}/`;
const URL_PREFIX = "/api/v1";

const router = Router();


const cleanFileName = (fileName: string) => {
    return fileName.replace(".routes.ts", "");
}

readdirSync(PATH_ROUTES).filter((file) => {
    const isRoute = file.includes(".routes.ts");
    if (isRoute) {
        const route = require(`${PATH_ROUTES}${file}`);
        const routeName = cleanFileName(file);
        console.log(`Cargando Route: ${routeName}`)
        router.use(`${URL_PREFIX}/${routeName}`, route.default);
    }
});

export default router;
