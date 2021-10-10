<template>
  <div class="modal-container">
    <div class="modal-content">
      <header>
        <slot name="header"></slot>
      </header>
      <main>
        <slot name="main"></slot>
      </main>
      <footer>
        <slot name="footer"></slot>
      </footer>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.modal-container {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(0, 0, 0, 0.7);
}
.modal-content {
  width: 800px;
  padding: 2rem;
  border-radius: 1rem;
  margin: 0 auto;

  background-color: white;

  text-align: center;
}
.modal-content > * {
  padding: 0.5rem;
}
</style>
