interface IContext {
  params: {
    productId: number;
  };
}
export async function GET(request: Request, context: IContext) {
  const { productId } = context.params;

  return Response.json({ data: productId });
}

export async function PATCH(request: Request, context: IContext) {
  const { productId } = context.params;

  return Response.json({ data: productId });
}

export async function PUT(request: Request, context: IContext) {
  const { productId } = context.params;

  return Response.json({ data: productId });
}

export async function DELETE(request: Request, context: IContext) {
  const { productId } = context.params;

  return Response.json({ data: productId });
}
