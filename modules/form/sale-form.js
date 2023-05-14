

const saleForm = (props) => {
  const bodyMaterials = { ...props.bodyMaterials };
  const bodyMainMaterials = { ...bodyMaterials.bodyMainMaterials };
  const bodyAdditionalMaterials_1 = { ...bodyMaterials.bodyAdditionalMaterials_1 };
  const facades = { ...props.facades }
  const mainFacades = { ...facades.mainFacades };
  const additionalFacades_1 = { ...props.facades.additionalFacades_1 };
  const optgroup = (optgroupList) => {
    return Array.isArray(optgroupList) ? optgroupList.map((material) => {
      return `<option class="form-selector-option" value="materials-body-${material.id}">${material.vendorСode} ${material.name}</option>`
    }) : null
  };

  return `<form class="form sale-form" name="sale-form" action="#" method="POST" target="print_popup"
          onsubmit="window.open('about:blank','print_popup','width=1000, height=800');">

          <fieldset class="fieldset" id="fieldset-${bodyMaterials.selector}">

            <legend class="legend">${bodyMaterials.name}</legend>

            <label class="label" for="selector-${bodyMaterials.selector}-${bodyMainMaterials.id}">

              <span class="label-title">${bodyMainMaterials.name}</span>

              <select class="form-selector" id="selector-${bodyMaterials.selector}-${bodyMainMaterials.id}" name="selector-${bodyMaterials.selector}-${bodyMainMaterials.id}">
                <option class="form-selector-option" value="${bodyMaterials.selector}-default" disabled>Выбрать материал корпуса
                </option>
                <option class="form-selector-option" value="${bodyMaterials.selector}-${bodyMaterials.noMaterial.id}" selected>${bodyMaterials.noMaterial.name}</option>
                <optgroup label="${bodyMainMaterials.selector_0.name}">
                 ${optgroup(bodyMainMaterials.selector_0.list)}
                </optgroup>
                <optgroup label="${bodyMainMaterials.selector_1.name}">
                 ${optgroup(bodyMainMaterials.selector_1.list)}
                </optgroup>
                <optgroup label="${bodyMainMaterials.selector_2.name}">
                 ${optgroup(bodyMainMaterials.selector_2.list)}
                </optgroup>
              </select>

            </label>
            <!-- /#selector-${bodyMaterials.selector}-${bodyMainMaterials.id} -->

            <label class="label" for="selector-${bodyMaterials.selector}-${bodyAdditionalMaterials_1.id}">

              <span class="label-title">${bodyAdditionalMaterials_1.name}</span>

              <select class="form-selector" id="selector-${bodyMaterials.selector}-${bodyAdditionalMaterials_1.id}" name="selector-${bodyMaterials.selector}-${bodyAdditionalMaterials_1.id}">
                <option class="form-selector-option" value="${bodyMaterials.selector}-default" disabled>Выбрать материал корпуса
                </option>
                <option class="form-selector-option" value="${bodyMaterials.selector}-${bodyMaterials.noMaterial.id}" selected>${bodyMaterials.noMaterial.name}</option>
                <optgroup label="${bodyAdditionalMaterials_1.selector_0.name}">
                 ${optgroup(bodyAdditionalMaterials_1.selector_0.list)}
                </optgroup>
                <optgroup label="${bodyAdditionalMaterials_1.selector_1.name}">
                 ${optgroup(bodyAdditionalMaterials_1.selector_1.list)}
                </optgroup>
                <optgroup label="${bodyAdditionalMaterials_1.selector_2.name}">
                 ${optgroup(bodyAdditionalMaterials_1.selector_2.list)}
                </optgroup>
              </select>

            </label>
            <!-- /#selector-${bodyMaterials.selector}-${bodyAdditionalMaterials_1.id} -->

            <button class="button form-button form-button_add-selector-${bodyMaterials.selector}" type="button"
              title="Добавить ещё ${facades.name.toLowerCase()}">Добавить ещё ${bodyMaterials.name.toLowerCase()}</button>

          </fieldset>
          <!-- /#fieldset-${facades.selector}.fieldset -->

          <fieldset class="fieldset" id="fieldset-${facades.selector}">

            <legend class="legend">${facades.name}</legend>

            <label class="label" for="selector-${facades.selector}-${mainFacades.id}">

              <span class="label-title">${mainFacades.name}</span>

              <select class="form-selector" id="selector-${facades.selector}-${mainFacades.id}" name="selector-${facades.selector}-${mainFacades.id}">
                <option class="form-selector-option" value="${facades.selector}-default" disabled>Выбрать материал корпуса
                </option>
                <option class="form-selector-option" value="${facades.selector}-${facades.noMaterial.id}" selected>${facades.noMaterial.name}</option>
                <optgroup label="${mainFacades.selector_0.name}">
                 ${optgroup(mainFacades.selector_0.list)}
                </optgroup>
                <optgroup label="${mainFacades.selector_1.name}">
                 ${optgroup(mainFacades.selector_1.list)}
                </optgroup>
                <optgroup label="${mainFacades.selector_2.name}">
                 ${optgroup(mainFacades.selector_2.list)}
                </optgroup>
              </select>

            </label>
            <!-- /#selector-${facades.selector}-${mainFacades.id} -->

            <label class="label" for="selector-${facades.selector}-${additionalFacades_1.id}">

              <span class="label-title">${additionalFacades_1.name}</span>

              <select class="form-selector" id="selector-${facades.selector}-${additionalFacades_1.id}" name="selector-${facades.selector}-${additionalFacades_1.id}">
                <option class="form-selector-option" value="${facades.selector}-default" disabled>Выбрать материал корпуса
                </option>
                <option class="form-selector-option" value="${facades.selector}-${facades.noMaterial.id}" selected>${facades.noMaterial.name}</option>
                <optgroup label="${additionalFacades_1.selector_0.name}">
                 ${optgroup(additionalFacades_1.selector_0.list)}
                </optgroup>
                <optgroup label="${additionalFacades_1.selector_1.name}">
                 ${optgroup(additionalFacades_1.selector_1.list)}
                </optgroup>
                <optgroup label="${additionalFacades_1.selector_2.name}">
                 ${optgroup(additionalFacades_1.selector_2.list)}
                </optgroup>
              </select>

            </label>
            <!-- /#selector-${facades.selector}-${additionalFacades_1.id} -->

            <button class="button form-button form-button_add-selector-${facades.selector}" type="button"
              title="Добавить ещё ${facades.name.toLowerCase()}">Добавить ещё ${facades.name.toLowerCase()}</button>

          </fieldset>
          <!-- /#fieldset-${facades.selector}.fieldset -->


          <button class="button form-button" type="submit" title="Рассчитать общую стоимость заказа">Рассчитать общую
            стоимость</button>
        </form>
        <!-- /.form-nomenclature -->`
  // return console.log(LDSP_Egger16mm)
  // return LDSP_Egger16mm;
}

export default saleForm;
