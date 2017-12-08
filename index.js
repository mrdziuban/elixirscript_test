import 'babel-polyfill';
import Elixir from './priv/elixir_script/build/elixirscript.build';

Elixir.start(Elixir.ElixirscriptTest, []);

const removeError = container => {
  const err = container.querySelector('.error');
  err && err.remove();
};

const addError = (container, err) => {
  const errorEl = document.createElement('pre');
  errorEl.classList.add('error');
  errorEl.innerText = err.stack;
  container.appendChild(errorEl);
};

document.addEventListener('DOMContentLoaded', () =>
  document.querySelectorAll('button').forEach(btn =>
    btn.addEventListener('click', () => {
      removeError(btn.parentElement);
      try {
        Elixir.ElixirscriptTest.__exports[btn.getAttribute('data-fn')]();
      } catch (e) {
        addError(btn.parentElement, e);
      }
    })));
