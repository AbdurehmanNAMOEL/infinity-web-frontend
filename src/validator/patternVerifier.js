 export const pattern = {
    name:/^[a-z A-Z]+$/,
    text:/^[a-z A-Z]+$/,
    email:/^[A-Z|a-z](([A-Z|a-z]|[0-9])*)(((\.)|(-)|(_))([A-Z|a-z]|[0-9])+)*@([A-Z|a-z]|[0-9])+(((\.)|(-)|(_))([A-Z|a-z]|[0-9])+)?\.[A-Z|a-z]{2,}$/,
    password:/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,15}$/,
    phoneNumber:/^(\+?(251)?0?9|7)([0-9]{8})$/,
   };