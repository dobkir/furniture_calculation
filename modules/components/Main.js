import saleForm from "../form/sale-form.js";

const Main = (props) => {
  return `  
  <main class="main">

    <div class="container container-main">

      <section class="section" id="section-materials">

        <h2 class="section-title">Форма расчёта заказа</h2>

        ${saleForm(props)}

      </section>
      <!-- /#section-materials.section -->

    </div>
    <!-- /.container-main -->

  </main>
  <!-- /.main -->
  `;
}

export default Main;