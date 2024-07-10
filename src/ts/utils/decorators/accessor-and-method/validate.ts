import "reflect-metadata";

const requiredMetadataKey = Symbol("required");

export default function validate(
  target: any,
  propertyName: string,
  descriptor: TypedPropertyDescriptor<Function>
) {
  let method = descriptor.value!;

  descriptor.value = function () {
    let requiredParemeters: number[] = Reflect.getOwnMetadata(
      requiredMetadataKey,
      target,
      propertyName
    );

    if (requiredParemeters) {
      for (let parameterIndex of requiredParemeters) {
        if (
          parameterIndex >= arguments.length ||
          arguments[parameterIndex] === undefined
        ) {
          throw new Error("Missing required argument");
        }
      }
    }

    return method.apply(this, arguments);
  };
}
