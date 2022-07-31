<template>
  <div id="app" style="color: #fff;">
    <a
      @click="
        downloadItem({
          url:
            'https://test.cors.workers.dev/?https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
          label: 'example.pdf',
        })
      "
    >
      download
    </a>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "downloadmusic",
  methods: {
    async downloadItem({ url, label }) {
      const response = await axios.get(url, { responseType: "blob" });
      const blob = new Blob([response.data], { type: "application/pdf" });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = label;
      link.click();
      URL.revokeObjectURL(link.href);
    },
  },
};
</script>