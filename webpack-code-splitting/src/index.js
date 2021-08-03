
async function getComponent() {
    const element = document.createElement('div');
    const { default: _ } = await import('lodash');
    const { default: printMe} = await import('./print');
    element.innerHTML = _.join(['Hello', 'yolo'], ' ');
    printMe()

    return element;
  }
  
getComponent().then((component) => {
  document.body.appendChild(component);
})
