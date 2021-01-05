var toolTipsList = [].slice.call(document.querySelectorAll('[data-toggle="tooltip"]'))
toolTipsList.forEach(t => new bootstrap.Tooltip(t));