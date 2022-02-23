// -------------
// INTERFACES are basically a way to describe data shapes, for example, an object.
// -------------

interface Props {
  // Optional Property
  message?: string;
  data?: {
    fruit: any;
    someArray: Array<string> | string[] | (string | number)[];
  };
  alignment: "top" | "bottom";
  // Modifiable when an object is first created
  readonly x?: number | 10;
}

// -------------
// TYPE is a definition of a type of data, for example, a union, primitive, intersection, tuple, or any other type.
// -------------

type Name = {
  name: string;
};

type Age = {
  age: number;
};

// -------------
// NEW INTERSECTIONS type combining two interfaces,
// -------------

type AllProps = Name & Age & Props;

// -------------
// DEFAULTPROPS
// -------------

const defaultProps: Age = {
  age: 99,
};

// -------------
// GENERICS
// -------------

// After the name of the function we have included a type variable, T, in angled brackets <>.
// T is now a placeholder for the type we wish to pass into identity, and is assigned to arg
// in place of its type: instead of number, T is now acting as the type.

function identity<T>(arg: T): T {
  return arg;
}

const Heading = ({ message, name, age, alignment }: AllProps): JSX.Element => {
  
  // -------------
  // Type Annotations on Variables
  // -------------

  let author: string = "Author";

  // -------------
  // Type Assertions
  // -------------

  const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;

  return (
    <div className="py-2">
      <h1 className={`text-3xl font-bold underline align-${alignment}`}>
        {message}
      </h1>
      {(name || age) && (
        <small>
          {author}: {name} {age}
        </small>
      )}
    </div>
  );
};

export default Heading;

Heading.defaultProps = defaultProps;


// https://www.typescriptlang.org/cheatsheets

// interface AppProps {
//   children1: JSX.Element; // bad, doesnt account for arrays
//   children2: JSX.Element | JSX.Element[]; // meh, doesn't accept strings
//   children3: React.ReactChildren; // despite the name, not at all an appropriate type; it is a utility
//   children4: React.ReactChild[]; // better, accepts array children
//   children: React.ReactNode; // best, accepts everything (see edge case below)
//   functionChildren: (name: string) => React.ReactNode; // recommended function as a child render prop type
//   style?: React.CSSProperties; // to pass through style props
//   onChange?: React.FormEventHandler<HTMLInputElement>; // form events! the generic parameter is the type of event.target
//   //  more info: https://react-typescript-cheatsheet.netlify.app/docs/advanced/patterns_by_usecase/#wrappingmirroring
//   props: Props & React.ComponentPropsWithoutRef<"button">; // to impersonate all the props of a button element and explicitly not forwarding its ref
//   props2: Props & React.ComponentPropsWithRef<MyButtonWithForwardRef>; // to impersonate all the props of MyButtonForwardedRef and explicitly forwarding its ref

//   message: string;
//   count: number;
//   disabled: boolean;
//   /** array of a type! */
//   names: string[];
//   /** string literals to specify exact string values, with a union type to join them together */
//   status: "waiting" | "success";
//   /** any object as long as you dont use its properties (NOT COMMON but useful as placeholder) */
//   obj: object;
//   obj2: {}; // almost the same as `object`, exactly the same as `Object`
//   /** an object with any number of properties (PREFERRED) */
//   obj3: {
//     id: string;
//     title: string;
//   };
//   /** array of objects! (common) */
//   objArr: {
//     id: string;
//     title: string;
//   }[];
//   /** a dict object with any number of properties of the same type */
//   dict1: {
//     [key: string]: MyTypeHere;
//   };
//   dict2: Record<string, MyTypeHere>; // equivalent to dict1
//   /** any function as long as you don't invoke it (not recommended) */
//   onSomething: Function;
//   /** function that doesn't take or return anything (VERY COMMON) */
//   onClick: () => void;
//   /** function with named prop (VERY COMMON) */
//   onChange: (id: number) => void;
//   /** function type syntax that takes an event (VERY COMMON) */
//   onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
//   /** alternative function type syntax that takes an event (VERY COMMON) */
//   onClick(event: React.MouseEvent<HTMLButtonElement>): void;
//   /** an optional prop (VERY COMMON!) */
//   optional?: OptionalType;
// };
