function Main() {
  return `
    <main class="main">

    <div class="container container-main">

      <section class="section" id="section-materials">

        <h2 class="section-title">Форма расчёта заказа</h2>

        <form class="form form-nomenclature" name="form-nomenclature" action="#" method="POST" target="print_popup"
          onsubmit="window.open('about:blank','print_popup','width=1000, height=800');">
          <fieldset class="fieldset" id="fieldset-materials-body">
            <legend class="legend">Материал корпуса</legend>

            <label class="label" for="selector-materials-body-0">

              <span class="label-title">Основной материал корпуса</span>

              <select class="form-selector" id="selector-materials-body-0" name="selector-materials-body-0">
                <option class="form-selector-option" value="materials-body-default" disabled>Выбрать материал корпуса
                </option>
                <option class="form-selector-option" value="materials-body-0" selected>Нет корпуса</option>
                <optgroup label="ЛДСП Egger">
                  <option class="form-selector-option" value="materials-body-1">ЛДСП Egger 16мм Серый</option>
                  <option class="form-selector-option" value="materials-body-2">ЛДСП Egger 16мм Белый</option>
                  <option class="form-selector-option" value="materials-body-3">ЛДСП Egger 16мм Бук Бавария светлый
                  </option>
                  <option class="form-selector-option" value="materials-body-4">ЛДСП Egger 16мм Бук Бавария темный
                  </option>
                </optgroup>
                <optgroup label="ЛДСП Kronospan">
                  <option class="form-selector-option" value="materials-body-2">ЛДСП Kronospan 16мм Белый</option>
                  <option class="form-selector-option" value="materials-body-1">ЛДСП Kronospan 16мм Серый</option>
                  <option class="form-selector-option" value="materials-body-3">ЛДСП Kronospan 16мм Бук Бавария светлый
                  </option>
                  <option class="form-selector-option" value="materials-body-4">ЛДСП Kronospan 16мм Бук Бавария темный
                  </option>
                </optgroup>
                <optgroup label="МДФ">
                  <option class="form-selector-option">ЛМДФ 16мм односторонний белый</option>
                  <option class="form-selector-option">МДФ 16мм</option>
                </optgroup>
              </select>

            </label>
            <!-- /#selector-materials-body-0 -->

            <label class="label" for="selector-materials-body-1">

              <span class="label-title">Дополнительный материал корпуса</span>

              <select class="form-selector" id="selector-materials-body-1" name="selector-materials-body-1">
                <option class="form-selector-option" value="materials-body-default" disabled>Выбрать материал корпуса
                </option>
                <option class="form-selector-option" value="materials-body-0" selected>Нет корпуса</option>
                <optgroup label="ЛДСП Egger">
                  <option class="form-selector-option" value="materials-body-1">ЛДСП Egger 16мм Серый</option>
                  <option class="form-selector-option" value="materials-body-2">ЛДСП Egger 16мм Белый</option>
                  <option class="form-selector-option" value="materials-body-3">ЛДСП Egger 16мм Бук Бавария светлый
                  </option>
                  <option class="form-selector-option" value="materials-body-4">ЛДСП Egger 16мм Бук Бавария темный
                  </option>
                </optgroup>
                <optgroup label="ЛДСП Kronospan">
                  <option class="form-selector-option" value="materials-body-2">ЛДСП Kronospan 16мм Белый</option>
                  <option class="form-selector-option" value="materials-body-1">ЛДСП Kronospan 16мм Серый</option>
                  <option class="form-selector-option" value="materials-body-3">ЛДСП Kronospan 16мм Бук Бавария светлый
                  </option>
                  <option class="form-selector-option" value="materials-body-4">ЛДСП Kronospan 16мм Бук Бавария темный
                  </option>
                </optgroup>
                <optgroup label="МДФ">
                  <option class="form-selector-option">ЛМДФ 16мм односторонний белый</option>
                  <option class="form-selector-option">МДФ 16мм</option>
                </optgroup>
              </select>

            </label>
            <!-- /#selector-materials-body-1 -->

            <button class="button form-button form-button_add-selector-materials-body" type="button"
              title="Добавить ещё один материал корпуса">Добавить ещё один материал корпуса</button>

          </fieldset>
          <!-- /#fieldset-materials-body.fieldset -->

          <fieldset class="fieldset" id="fieldset-materials-fasad">
            <legend class="legend">Материал фасада</legend>

            <label class="label" for="selector-materials-fasad-0">

              <span class="label-title">Основной материал фасада</span>

              <select class="form-selector" id="selector-materials-fasad-0" name="selector-materials-fasad-0">
                <option class="form-selector-option" value="materials-fasad-default" disabled>Выбрать материал фасада
                </option>
                <option class="form-selector-option" value="materials-fasad-0" selected>Нет фасада</option>
                <optgroup label="ЛДСП Egger">
                  <option class="form-selector-option" value="materials-fasad-1">ЛДСП Egger 16мм Серый</option>
                  <option class="form-selector-option" value="materials-fasad-2">ЛДСП Egger 16мм Белый</option>
                  <option class="form-selector-option" value="materials-fasad-3">ЛДСП Egger 16мм Бук Бавария светлый
                  </option>
                  <option class="form-selector-option" value="materials-fasad-4">ЛДСП Egger 16мм Бук Бавария темный
                  </option>
                </optgroup>
                <optgroup label="ЛДСП Kronospan">
                  <option class="form-selector-option" value="materials-fasad-2">ЛДСП Kronospan 16мм Белый</option>
                  <option class="form-selector-option" value="materials-fasad-1">ЛДСП Kronospan 16мм Серый</option>
                  <option class="form-selector-option" value="materials-fasad-3">ЛДСП Kronospan 16мм Бук Бавария светлый
                  </option>
                  <option class="form-selector-option" value="materials-fasad-4">ЛДСП Kronospan 16мм Бук Бавария темный
                  </option>
                </optgroup>
                <optgroup label="МДФ">
                  <option class="form-selector-option">ЛМДФ 16мм односторонний белый</option>
                  <option class="form-selector-option">МДФ 16мм</option>
                </optgroup>
              </select>

            </label>
            <!-- /#selector-materials-fasad-0 -->

            <label class="label" for="selector-materials-fasad-1">

              <span class="label-title">Дополнительный материал фасада</span>

              <select class="form-selector" id="selector-materials-fasad-1" name="selector-materials-fasad-1">
                <option class="form-selector-option" value="materials-fasad-default" disabled>Выбрать материал фасада
                </option>
                <option class="form-selector-option" value="materials-fasad-0" selected>Нет фасада</option>
                <optgroup label="ЛДСП Egger">
                  <option class="form-selector-option" value="materials-fasad-1">ЛДСП Egger 16мм Серый</option>
                  <option class="form-selector-option" value="materials-fasad-2">ЛДСП Egger 16мм Белый</option>
                  <option class="form-selector-option" value="materials-fasad-3">ЛДСП Egger 16мм Бук Бавария светлый
                  </option>
                  <option class="form-selector-option" value="materials-fasad-4">ЛДСП Egger 16мм Бук Бавария темный
                  </option>
                </optgroup>
                <optgroup label="ЛДСП Kronospan">
                  <option class="form-selector-option" value="materials-fasad-2">ЛДСП Kronospan 16мм Белый</option>
                  <option class="form-selector-option" value="materials-fasad-1">ЛДСП Kronospan 16мм Серый</option>
                  <option class="form-selector-option" value="materials-fasad-3">ЛДСП Kronospan 16мм Бук Бавария светлый
                  </option>
                  <option class="form-selector-option" value="materials-fasad-4">ЛДСП Kronospan 16мм Бук Бавария темный
                  </option>
                </optgroup>
                <optgroup label="МДФ">
                  <option class="form-selector-option">ЛМДФ 16мм односторонний белый</option>
                  <option class="form-selector-option">МДФ 16мм</option>
                </optgroup>
              </select>

            </label>
            <!-- /#selector-materials-fasad-1 -->

            <button class="button form-button form-button_add-selector-materials-fasad" type="button"
              title="Добавить ещё один материал фасада">Добавить ещё один материал фасада</button>

          </fieldset>
          <!-- /#fieldset-materials-fasad.fieldset -->

          <button class="button form-button" type="submit" title="Рассчитать общую стоимость заказа">Рассчитать общую
            стоимость</button>
        </form>
        <!-- /.form-nomenclature -->

      </section>
      <!-- /#section-materials.section -->

    </div>
    <!-- /.container-main -->

  </main>
  <!-- /.main -->`
}

export default Main;