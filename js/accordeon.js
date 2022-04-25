import {
  activeClass,
  getBlockElementOfHeader,
  getContentElementOfBlock,
  getAccordeonElements,
  addEventToAllElements,
} from './helpers.js'

export function SingleBlockAccordeon({ selector, eventType }) {
  const { headers, blocks, contents } = getAccordeonElements( selector )

  const resetAllBlocks = () => {
    blocks.forEach(block => block.classList.remove(activeClass))
    contents.forEach(content => content.style.maxHeight = 0)
  }

  const setActiveBlock = ( header ) => {
    const block = getBlockElementOfHeader( header )
    block.classList.add(activeClass)

    const content = getContentElementOfBlock( block )
    content.style.maxHeight = content.scrollHeight + 'px'
  }

  addEventToAllElements({
    eventType: eventType,
    elements: headers,
    event: ( header ) => {
      const isActive = getBlockElementOfHeader( header ).classList.contains(activeClass)
      resetAllBlocks();
      if(!isActive) setActiveBlock( header )
    },
  })
}

export function ToggleBlockAccordeon({ selector, eventType }) {
  const { headers } = getAccordeonElements( selector )

  const toggleBlock = ( header ) => {
    const block = getBlockElementOfHeader( header )
    block.classList.toggle(activeClass)

    const content = getContentElementOfBlock( block )
    content.style.maxHeight = block.classList.contains('active') ?
      content.scrollHeight + 'px' : 0
  }

  addEventToAllElements({
    eventType: eventType,
    elements: headers,
    event: ( header ) => {
      toggleBlock( header )
    },
  })
}

// Declarative paradigm
// Functional Programming
// Coupling and Cohesion
// Encapuslation