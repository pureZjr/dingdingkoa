// import {
//   getAllCarSign,
//   getCarSignById,
//   insertCarSign,
//   // updateCarSign,
//   updateCarUseTimes
// } from "@service/aboutCars";

// export default function run(router) {
//   // 获取使用过的所有车辆信息
//   router.get("/getAllCarSign", async (ctx, next) => {
//     const data = await getAllCarSign(ctx, next);
//     ctx.body = {
//       data
//     };
//   });
//   // 根据车辆id获取车辆信息
//   router.get("/getCarSignById", async (ctx, next) => {
//     const data = await getCarSignById(ctx, next);
//     ctx.body = {
//       data
//     };
//   });
//   // 设置车辆的信息
//   router.post("/insertCarSign", async (ctx, next) => {
//     const data = await insertCarSign(ctx, next);
//     ctx.body = {
//       status: 1,
//       data
//     };
//   });
//   // 更新车辆的信息
//   router.post("/updateCarSign", async (ctx, next) => {
//     const data = await updateCarSign(ctx, next);

//     ctx.body = {
//       status: 1,
//       data
//     };
//   });
//   // 更新车辆的使用次数
//   router.post("/updateCarUseTimes", async (ctx, next) => {
//     const data = await updateCarUseTimes(ctx, next);
//     ctx.body = {
//       status: 1,
//       data
//     };
//   });
// }
