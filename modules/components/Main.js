import saleForm from "../form/sale-form.js";

function Main() {
  return `
    <main class="main">

    <div class="container container-main">

      <section class="section" id="section-materials">

        <h2 class="section-title">Форма расчёта заказа</h2>

        ${saleForm()}

      </section>
      <!-- /#section-materials.section -->

    </div>
    <!-- /.container-main -->

  </main>
  <!-- /.main -->`
}

export default Main;