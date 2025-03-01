// This function selects the suggested size
confirmSize = (event) => {
  const variant = product.variants.find((v) => v.barcode == event.detail.code);
  console.log(variant);
  /* if (!variant) return;
  variant.options.forEach((optionValue, index) => {
    const optionName = product.options[index];
    const escapedOptionValue = optionValue.replace(/"/g, '\\"');
    const selector = `[name^="${optionName}"][value="${escapedOptionValue}"]`;
    const element = document.querySelector(selector);
    element?.click();
  });*/
};

    // This function updates the widget code
    document.addEventListener('on:variant:change', (event) => {
      console.log(event);
    const widget = document.querySelector('#onlinesizing-widget');
    widget?.setAttribute('global-id', event.data.variant.id);
});