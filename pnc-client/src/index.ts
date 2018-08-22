const world = 'world';

export function hello(entity: string = world): string {
    return `Hello ${entity}! `;
  }