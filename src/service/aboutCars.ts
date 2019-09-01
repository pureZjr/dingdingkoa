// import aboutCars from "@service/aboutCars";

// export const getAllCarSign = async (ctx, _) => {
//   const data = await aboutCars.getAllCarSign();
//   return data;
// };

// export const getCarSignById = async (ctx, _) => {
//   let request = ctx.request;
//   let id = request.query.id || 0;
//   const data = await aboutCars.getCarSignById(id);
//   return data;
// };

// export const insertCarSign = async (ctx, _) => {
//   try {
//     const postdata = ctx.request.body;
//     // 判断记录是否已经存在
//     const recode: any = await aboutCars.getCarSignById(postdata.id);
//     if (!recode.length) {
//       const data = await aboutCars.insertCarSign(postdata.id, postdata.sign, 1);
//       return data;
//     } else {
//       return { success: false, err: "不能重复添加" };
//     }
//   } catch (err) {}
// };

// export const updateCarSign = async (ctx, _) => {
//   try {
//     const postdata = ctx.request.body;
//     const data = await aboutCars.updateCarSign(postdata.id, postdata.sign);
//     return data;
//   } catch (err) {}
// };

// export const updateCarUseTimes = async (ctx, _) => {
//   try {
//     const postdata = ctx.request.body;
//     let parseData: any = JSON.parse(postdata);
//     const data = await aboutCars.updateCarUseTimes(parseData.id);
//     return data;
//   } catch (err) {}
// };
