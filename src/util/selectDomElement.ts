export function selectDomElement(selector: string): JQuery {
  const element:JQuery = $(selector);
  if (!this.element.length) {
    throw new Error(`Element selector "${selector}" gave no result`);
  }
  return element;
}
