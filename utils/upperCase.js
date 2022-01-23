const prettyName = (name) => {
  const firstLettertoUpercase = name[0].toUpperCase() + name.substring(1);

  return firstLettertoUpercase;
};

export { prettyName };
