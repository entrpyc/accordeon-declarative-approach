export const elements = {
  header: '.header',
  block: '.block',
  content: '.content',
}

export const activeClass = 'active'

export const getBlockElementOfHeader = (header) => header.parentElement
export const getContentElementOfBlock = (block) => block.querySelector( elements.content )

export const getAccordeonElements = (selector) => {
  const accordeon = document.querySelector( selector );
  const headers = accordeon.querySelectorAll( elements.header );
  const contents = accordeon.querySelectorAll( elements.content  );
  const blocks = accordeon.querySelectorAll( elements.block );

  return {
    accordeon,
    headers,
    contents,
    blocks,
  }
}


export const addEventToAllElements = ({ elements, event, eventType }) => {
  elements.forEach(element =>  {
    element.addEventListener(eventType, () => event(element))
  })
}
