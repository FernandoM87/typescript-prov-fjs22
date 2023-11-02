// DIN UPPGIFT: Utför fråga 1-3 med kodexempel i Typescript / 3 poäng


// 1. Ge ett exempel på en funktion med en generiskt typ.

function identity(arg: number): number {
    return arg;
  }

// 2. Ge ett exempel på en funktion med två generiska typer.

type IfSameKeyThanParentTOtherwiseOtherType<Keys extends string, T, OtherType> = {
    [K in Keys]: {
      [SameThanK in K]: T;
    } &
      { [OtherThanK in Exclude<Keys, K>]: OtherType };
  };

// 3. Ge ett exempel på ett interface med en generisk typ.

interface GenericIdentityFn {
    <Type>(arg: Type): Type;
  }
   
  function identity<Type>(arg: Type): Type {
    return arg;
  }
   
  let myIdentity: GenericIdentityFn = identity;