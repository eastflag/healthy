import { Node } from 'tiptap'
import IframeView from './IframeView'

export default class Iframe extends Node {
  get name() {
    return 'iframe'
  }

  get schema() {
    return {
      attrs: {
        src: {
          default: null
        },
        width: {
          default: 1675
        },
        height: {
          default: 550
        }
      },
      group: 'block',
      selectable: false,
      parseDOM: [{
        tag: 'iframe',
        getAttrs: dom => ({
          src: dom.getAttribute('src'),
          width: dom.getAttribute('width') || 640,
          height: dom.getAttribute('height') || 550
        }),
      }],
      toDOM: node => ['iframe', {
        src: node.attrs.src,
        width: node.attrs.width,
        height: node.attrs.height,
        frameborder: 0,
        allowfullscreen: 'true',
        allow: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
      }]
    }
  }

  get view() {
    return IframeView
  }
}
