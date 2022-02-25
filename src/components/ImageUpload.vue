export defaul const app = new Vue({
  el: '#app',
  data: {
    file: null,
    previewImg: null,
  },
  watch: {
    file(val) {
      if (!val) return;
      if (this.previewImg) {
        this.previewImg.remove();
      }
      const img = document.createElement("img");
      img.classList.add("obj");
      img.file = this.file;
      this.previewImg = img;
      this.$refs.preview.appendChild(img);
        
      const fileReader = new FileReader();
      fileReader.onload = (e) => { this.previewImg.src = e.target.result; };
      fileReader.readAsDataURL(this.file);
    }
  }
});