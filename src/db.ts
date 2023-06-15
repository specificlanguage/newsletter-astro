import { Sequelize, DataTypes} from "@sequelize/core";

const URL = `postgres://${import.meta.env.PGUSER}:${import.meta.env.PGPASSWORD}@${import.meta.env.PGHOST}/${import.meta.env.PGDATABASE}?options=project%3D${import.meta.env.ENDPOINT_ID}`
const sequelize = new Sequelize(URL, {
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    dialectOptions: {
        ssl: {
            require: true
        }
    }
});

export const Response = sequelize.define("response", {
    slug: DataTypes.TEXT,
    questionID: DataTypes.TEXT,
    answer: DataTypes.TEXT
});

(async () => {
    await sequelize.sync({ force: true });
    // Code here
})();

export async function addResponse (slug: string, questionID: string, answer: string) {
    const resp = await Response.create({slug: slug, questionID: questionID, answer: answer});
    console.log(resp.toJSON());
}