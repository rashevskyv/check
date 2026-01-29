/// jQuery component start
(function ($) {

	const Component = function (container) {
		this.$container = $(container);
		this.$wrapper = this.$container.closest('.table__wrapper');
		this.resultClass = this.$container.data('result');
		this.result = this.$wrapper.next('.result');

		this.result1Content = '<p class="checker_p"><strong>Введіть перші 9 символів серійного номера консолі.</strong></p><p class="checker_p">Серійний номер консолі розташований на нижній грані самого планшета. Якщо приставка б\\у, то переконайтеся, що серійний номер на корпусі збігається з тим, що вказаний в <strong>Системних налаштуваннях</strong> -> <strong>Система</strong> -> <strong>Серійні номери</strong>. Якщо після введення серійника нічого не відбувається, вимкніть блокувальник реклами<div class="checker"><input class="inputtext" type="text" id="nxsn" name="country_code" pattern="[xX][aAkKjJtT][wWjJkKeE](1|4|7|9)[0-9]+" placeholder="XAW100000" onkeyup="checkSerial()"></div>';

		this.result2Content = '<div class="new_revision checker_p">Nintendo Switch Lite і Nintendo Switch OLED прошивається тільки за допомогою чіпа!</div><p class="checker_p"><strong>Детальніше про чіпи <a href="https://switch.customfw.xyz/modchip">в керівництві</a>.</strong></p>';

		this.resultEmpty = '';
	};

	$.extend(true, Component.prototype, {
		init() {
			this._bindInteractions();
		},

		addContent() {
			if (this.resultClass === 'result1') {
				this.result.html(this.result1Content);
				$(".check-result").html("");
			} else if (this.resultClass === 'result2') {
				this.result.html(this.result2Content);
				$(".check-result").html("");
			}
		},

		showResult() {
			this.addContent()

			this.result.slideDown(500);
			$('html, body').animate({
				scrollTop: $(".result").offset().top
			}, 600); $('.result').removeClass('hidden')
		},

		_bindInteractions() {
			this.$container.on('click', this.showResult.bind(this));
			$(".descriptionToggler").click(function () {
				$(".inputtext").focus();
			});
		},
	});
	const $component = $('.descriptionToggler');
	let instance;

	$component.each((i, item) => {
		instance = new Component(item);
		instance.init();
	});
}(jQuery));
/// jQuery component end