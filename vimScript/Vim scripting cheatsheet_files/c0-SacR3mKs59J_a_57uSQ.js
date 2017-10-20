(function () {
    function headElement () {
    return document.getElementsByTagName('head')[0];
  }

  function addEventListener (node, event, handler) {
    var capture = true;
    if (node.attachEvent) {
      node.attachEvent('on' + event, handler);
    } else {
      node.addEventListener(event, handler, capture);
    }
  }

  function removeEventListener (node, event, handler) {
    var capture = true;
    if (node.detachEvent) {
      node.detachEvent('on' + event, handler);
    } else {
      node.removeEventListener(event, handler, capture);
    }
  }

  function preventDefault (e) {
    e = e || self.event;
    if (e.preventDefault) e.preventDefault();
    e.returnValue = false;
    return false;
  }

  function createStylesheetElement (id, content) {
    var stylesheet = document.createElement('style');
    stylesheet.setAttribute('id', id);
    stylesheet.setAttribute('type', 'text/css');
    stylesheet.innerHTML = content;
    return stylesheet;
  };

  function createIframeElement (id) {
    var element = document.createElement('iframe');
    element.setAttribute('id', id);
    element.setAttribute('frameborder', '0');
    element.setAttribute('scrolling', 'no');
    element.setAttribute('height', '290');
    return element;
  }


  function appendIframe () {
    var id = 'code-sponsor-embed-iframe';
    var iframe = document.getElementById(id);
    if (iframe) return;
    iframe = createIframeElement(id);
    target = document.getElementById('code-sponsor-widget');
    if (target) {
      target.appendChild(iframe);
      iframe.setAttribute('src', 'https://app.codesponsor.io/widgets/c0-SacR3mKs59J_a_57uSQ?image=hide&theme=light');
      iframe.setAttribute('width', '319');
      iframe.setAttribute('height', '130');
    }
  }

  function open (event) {
    preventDefault(event);
    appendIframe();
  }

  addEventListener(document, 'load', open);
})();
