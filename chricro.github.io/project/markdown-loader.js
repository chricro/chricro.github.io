const marked = require('marked');
const katex = require('katex');

function escapeLatex(text) {
    return text.replace(/\\/g, '\\\\');
}

function renderLatex(latex, displayMode) {
    try {
        return katex.renderToString(latex, {
            displayMode: displayMode,
            throwOnError: false
        });
    } catch (error) {
        console.error('KaTeX error:', error);
        return latex;
    }
}

const renderer = new marked.Renderer();

renderer.code = function(code, language) {
    if (language === 'math') {
        return renderLatex(escapeLatex(code), true);
    }
    return '<pre><code>' + escapeLatex(code) + '</code></pre>';
};

renderer.codespan = function(code) {
    if (code.startsWith('$') && code.endsWith('$')) {
        return renderLatex(escapeLatex(code.slice(1, -1)), false);
    }
    return '<code>' + escapeLatex(code) + '</code>';
};

function loadMarkdownContent(url, targetId) {
    console.log('Attempting to load:', url);
    fetch(url)
        .then(response => response.text())
        .then(text => {
            console.log('Markdown content received, length:', text.length);
            
            const html = marked(text, { renderer: renderer });
            document.getElementById(targetId).innerHTML = html;
            
            // MathJax is no longer needed for rendering, but we'll keep it for now
            if (typeof MathJax !== 'undefined' && MathJax.typesetPromise) {
                MathJax.typesetPromise([document.getElementById(targetId)])
                    .then(() => {
                        console.log('MathJax typesetting complete');
                    })
                    .catch((err) => console.error('MathJax typesetting failed:', err.message));
            } else {
                console.error('MathJax is not loaded or typesetPromise is not available');
            }
        })
        .catch(error => {
            console.error('Error loading markdown:', error);
            document.getElementById(targetId).innerHTML = 'Error loading content. Please try again later.';
        });
}

// Export the function if using modules
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = { loadMarkdownContent };
}
