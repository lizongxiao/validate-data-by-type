// 校验工具

import Ajv from "ajv";
import schema from "../schema/index.json";

const ajv = new Ajv({ schemas: [schema] });

export function validateDataByType(type: string, data: unknown) {
  console.log(`开始校验，类型：${type}， 数据：`, data);
  var validate = ajv.getSchema(`api#/definitions/${type}`);
  if (validate) {
    const valid = validate(data);
    if (!valid) {
      console.log("校验失败", validate.errors);
    } else {
      console.log("校验成功");
    }
  } else {
    console.log("未找到目标类型");
  }
}
