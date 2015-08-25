# emoji-selector

👋`emoji-selector` is a `paper-input-addon` component (see [Polymer.PaperInput](https://github.com/polymerelements/paper-input))
that lets you select an emoji from a list and insert it into a text field.

Since you probably don't remember where each emoji is, it ships with a search-for-emoji-keywords feature! 🚀🎉

Example:
```html
    <paper-input label="needs moar emoji">
      <emoji-selector suffix></emoji-selector>
    </paper-input>

    <paper-input-container>
      <emoji-selector suffix id="s1"></emoji-selector>
      <label>whoa! textareas!</label>
      <iron-autogrow-textarea class="paper-input-input" id="a1"></iron-autogrow-textarea>
    </paper-input-container>
    <script>
      // Elements that aren't paper-inputs work. but need to be manually wired up.
      document.getElementById('s1').inputTarget = document.getElementById('a1');
    </script>

```
💖
