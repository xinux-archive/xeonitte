const inits = () => {
  return Deno.env.toObject();
};

const dots = inits();

export default dots;
