// For CSS
declare module "*.module.css" {
  const classes: { [key: string]: string };
  export default classes;
}

// For Img ( PNG )
declare module "*.png" {
  export default "" as string;
}

// For Img ( SVG )
declare module "*.svg" {
  const content: any;
  export default content;
}
