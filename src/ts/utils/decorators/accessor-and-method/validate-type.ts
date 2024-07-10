import "reflect-metadata";

export default function <T>(
  target: any,
  propertyKey: string,
  descriptor: TypedPropertyDescriptor<T>
) {
  let set = descriptor.set!;

  descriptor.set = function (value: T) {
    let type = Reflect.getMetadata("design:type", target, propertyKey);

    if (!(value instanceof type)) {
      throw new TypeError(
        `Invalid type, get ${typeof value} not ${type.name}.`
      );
    }

    set.call(this, value);
  };
}
