/** This is a set of functions for artexpromgroup website front-end
	* @author andrij krasotkin <zimorodokan@gmail.com>
	* @license Apache-2.0
	* Copyright 2019 andrij krasotkin
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	* https://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

'use strict';

(function addMain(mainName = 'Artex') {
	const Main = function (moduleName, dataForModule) {
		if (Main.Modules[moduleName]) {
			Main.Modules[moduleName](dataForModule);
		}
		else {
			console.error(mainName, 'Module', moduleName, 'not registered');
		}
	};
	Main.Data = {};
	Main.Elements = {};
	Main.Modules = {};
	Main.Variables = {};
	const Data = Main.Data;
	const Elements = Main.Elements;
	const Modules = Main.Modules;
	const Variables = Main.Variables;

	if (!window[mainName]) {
		// console.log('Global variable', mainName, 'not exists. We will create it.');
		window[mainName] = Main;
	}
	else {
		console.error('Global variable', mainName, 'already exists. Please, resolve the collision.');
		return;
	}

	/** @function fillPage */
	(function addModulefillPage() {
		let F;
		const moduleName = 'fillPage';
		const module = function moduleFillPage() {
			// console.log(`${mainName}.${moduleName}`);
			F.processDataForModule();
		};
		module.F = {
			'processEvents': {},
		};
		F = module.F;

		/** @function addFunctionProcessDataForModule */
		(function addFunctionProcessDataForModule() {
			const functionName = 'processDataForModule';

			/** @function processDataForModule */
			F[functionName] = function processDataForModule() {
				// console.log(`${mainName}.${moduleName}.${functionName}`, arguments);
				if (Data.page) {
					if (Data.page.type) {
						switch (Data.page.type) {
							case 'article':
								F.fillPageArticle(Data.page.type);
								break;
							case 'authorization':
								F.fillPageAuthorization(Data.page.type);
								break;
							case 'basket':
								F.fillPageBasket(Data.page.type);
								break;
							case 'brand':
								F.fillPageBrand(Data.page.type);
								break;
							case 'brands':
								F.fillPageBrands(Data.page.type);
								break;
							case 'contacts':
								F.fillPageContacts(Data.page.type);
								break;
							case 'finish':
								F.fillPageFinish(Data.page.type);
								break;
							case 'history':
								F.fillPageHistory(Data.page.type);
								break;
							case 'index':
								F.fillPageIndex(Data.page.type);
								break;
							case 'journal':
								F.fillPageJournal(Data.page.type);
								break;
							case 'order':
								F.fillPageOrder(Data.page.type);
								break;
							case 'product':
								F.fillPageProduct(Data.page.type);
								break;
							case 'product-group':
								F.fillPageProductGroup(Data.page.type);
								break;
							case 'response':
								F.fillPageResponse(Data.page.type);
								break;
							case 'user':
								F.fillPageUser(Data.page.type);
								break;
							default:
								F.fillPageDefault(Data.page.type);
						}
					}
					else {
						console.error(`${mainName}.${moduleName}.${functionName}`, arguments, 'Data.page.type undefined');
					}
				}
				else {
					console.error(`${mainName}.${moduleName}.${functionName}`, arguments, 'Data.page undefined');
				}
			};
		}());
		/* /////////////////////////////////////////////////////////////////////////////////////////// */

		/** @function addFunctionAddEventsToLayer */
		(function addFunctionAddEventsToLayer() {
			const functionName = 'addEventsToLayer';

			/** @function addEventsToLayer */
			F[functionName] = function addEventsToLayer() {
				// console.log(`${mainName}.${moduleName}.${functionName}`, arguments);
				const layerWithShadowElements = document.querySelectorAll('.layer.with-shadow');
				const openLayerInfoElements = document.querySelectorAll('[data-open-layer="info"]');
				const closeLayerInterfaceElements = document.querySelectorAll('[data-close-layer=""]');

				if (layerWithShadowElements) {
					Array.prototype.forEach.call(layerWithShadowElements, (element) => {
						element.addEventListener('click', (event) => {
							event.stopPropagation();
							if (event.target === element) {
								element.classList.remove('open');
							}
						});
					});
				}

				if (openLayerInfoElements) {
					Array.prototype.forEach.call(openLayerInfoElements, (element) => {
						if (element.nextElementSibling) {
							element.addEventListener('click', () => {
								element.nextElementSibling.classList.add('open');
							});
						}
					});
				}

				if (closeLayerInterfaceElements) {
					Array.prototype.forEach.call(closeLayerInterfaceElements, (element) => {
						if (element.parentElement.parentElement) {
							element.addEventListener('click', () => {
								element.parentElement.parentElement.classList.remove('open');
							});
						}
					});
				}
			};
		}());
		/* /////////////////////////////////////////////////////////////////////////////////////////// */

		/** @function addFunctionAddEventsToPageHeader */
		(function addFunctionAddEventsToPageHeader() {
			const functionName = 'addEventsToPageHeader';

			/** @function addEventsToPageHeader */
			F[functionName] = function addEventsToPageHeader() {
				// console.log(`${mainName}.${moduleName}.${functionName}`, arguments);
				if (Elements.pageHeader) {
					// desktop Search
					Elements.pageHeaderDesktopSearch = Elements.pageHeader.querySelector('[data-screen="desktop"] > .second-line > .container > .search');
					if (Elements.pageHeaderDesktopSearch) {
						Elements.pageHeaderDesktopSearchContainerInput = Elements.pageHeaderDesktopSearch.querySelector('input');
						if (Elements.pageHeaderDesktopSearchContainerInput) {
							Elements.pageHeaderDesktopSearchContainerInput.addEventListener('click', () => {
								Elements.body.classList.add('search-active');
							});
							Elements.pageHeaderDesktopSearchShadowLayer = Elements.pageHeaderDesktopSearch.querySelector('.shadow-layer');
							if (Elements.pageHeaderDesktopSearchShadowLayer) {
								Elements.pageHeaderDesktopSearchShadowLayer.addEventListener('click', () => {
									Elements.pageHeaderDesktopSearchContainerInput.value = '';
									Elements.pageHeaderDesktopSearchContainerInput.focus();
									Elements.body.classList.remove('search-active');
								});
							}
						}
					}

					// mobile Search
					Elements.pageHeaderMobileSearch = Elements.pageHeader.querySelector('[data-screen="mobile"] > .container > .search');
					if (Elements.pageHeaderMobileSearch) {
						Elements.pageHeaderMobileSearchContainerInput = Elements.pageHeaderMobileSearch.querySelector('input');
						if (Elements.pageHeaderMobileSearchContainerInput) {
							Elements.pageHeaderMobileSearchContainerInput.addEventListener('click', () => {
								Elements.body.classList.add('search-active');
							});

							Elements.pageHeaderMobileSearchShadowLayer = Elements.pageHeaderMobileSearch.querySelector('.shadow-layer');
							if (Elements.pageHeaderMobileSearchShadowLayer) {
								Elements.pageHeaderMobileSearchShadowLayer.addEventListener('click', F[functionName].closePageHeaderMobileSearch);
							}

							Elements.pageHeaderMobileSearchContainerSwitch = Elements.pageHeaderMobileSearch.querySelector('.switch');
							if (Elements.pageHeaderMobileSearchContainerSwitch) {
								Elements.pageHeaderMobileSearchContainerSwitch.addEventListener('click', () => {
									Elements.body.classList.add('search-active');
									Elements.pageHeaderMobileSearchContainerInput.focus();
								});
							}
						}

						Elements.pageHeaderMobileSearchContainerClose = Elements.pageHeaderMobileSearch.querySelector('.close-search');
						if (Elements.pageHeaderMobileSearchContainerClose) {
							Elements.pageHeaderMobileSearchContainerClose.addEventListener('click', F[functionName].closePageHeaderMobileSearch);
						}
					}

					// mobile process Main Menu opening / closing
					Elements.pageHeaderMobileMainMenu = Elements.pageHeader.querySelector('[data-screen="mobile"] > .container > .menu');
					if (Elements.pageHeaderMobileMainMenu) {
						Elements.pageHeaderMobileMainMenuSwitch = Elements.pageHeaderMobileMainMenu.querySelector('.switch');
						Elements.pageHeaderMobileMainMenuShadowLayer = Elements.pageHeaderMobileMainMenu.querySelector('.shadow-layer');
						if (Elements.pageHeaderMobileMainMenuSwitch && Elements.pageHeaderMobileMainMenuShadowLayer) {
							Elements.pageHeaderMobileMainMenuSwitch.addEventListener('click', () => {
								Elements.body.classList.add('page-left-menu-open');
							});
							Elements.pageHeaderMobileMainMenuShadowLayer.addEventListener('click', () => {
								Elements.body.classList.remove('page-left-menu-open');
							});
						}
						Elements.pageHeaderMobileMainMenuItemNames = Elements.pageHeaderMobileMainMenu.querySelectorAll('.name');
						if (Elements.pageHeaderMobileMainMenuItemNames) {
							Array.prototype.forEach.call(Elements.pageHeaderMobileMainMenuItemNames, (element) => {
								element.addEventListener('click', F[functionName].processPageHeaderMobileMainMenuItemName);
							});
						}
					}
				}
			};

			/** @function closePageHeaderMobileSearch */
			F[functionName].closePageHeaderMobileSearch = function closePageHeaderMobileSearch() {
				Elements.pageHeaderMobileSearchContainerInput.value = '';
				Elements.pageHeaderMobileSearchContainerInput.focus();
				Elements.body.classList.remove('search-active');
			};

			/** @function processPageHeaderMobileMainMenuItemName */
			F[functionName].processPageHeaderMobileMainMenuItemName = function processPageHeaderMobileMainMenuItemName(event) {
				event.currentTarget.parentElement.classList.toggle('open');
			};
		}());
		/* /////////////////////////////////////////////////////////////////////////////////////////// */

		/** @function addFunctionAddEventsToPageFooter */
		(function addFunctionAddEventsToPageFooter() {
			const functionName = 'addEventsToPageFooter';

			/** @function addEventsToPageFooter */
			F[functionName] = function addEventsToPageFooter() {
				// console.log(`${mainName}.${moduleName}.${functionName}`, arguments);

				F.processEvents.processPageFooterNotificationLink = function processPageFooterNotificationLink() {
					F.processEvents.processPageFooterNotificationLink.func();
				};

				if (Elements.pageFooterNotificationLink) {
					Elements.pageFooterNotificationLink.addEventListener('click', F.processEvents.processPageFooterNotificationLink);
				}
			};
		}());
		/* /////////////////////////////////////////////////////////////////////////////////////////// */

		/** @function addFunctionFindElements */
		(function addFunctionFindElements() {
			const functionName = 'findElements';

			/** @function findElements */
			F[functionName] = function findElements() {
				// console.log(`${mainName}.${moduleName}.${functionName}`, arguments);

				Elements.html = document.documentElement;
				Elements.body = document.body;
				Elements.pageFooter = document.querySelector('body > footer');
				Elements.pageFooterNotification = Elements.pageFooter.querySelector('.notification');
				Elements.pageFooterNotificationText = Elements.pageFooterNotification.querySelector('.insert');
				Elements.pageFooterNotificationLink = Elements.pageFooterNotification.querySelector('.link');
				Elements.pageHeader = document.querySelector('body > header');
				Elements.royalSlider = document.getElementById('royalSlider');
			};
		}());
		/* /////////////////////////////////////////////////////////////////////////////////////////// */

		/** @function addFunctionFillElementPageHeader */
		(function addFunctionFillElementPageHeader() {
			const functionName = 'fillElementPageHeader';

			/** @function fillElementPageHeader */
			F[functionName] = function fillElementPageHeader() {
				// console.log(`${mainName}.${moduleName}.${functionName}`, arguments);
				if (Elements.pageHeader) {
					if (typeof Data.user === 'object' && typeof Data.user.name === 'string' && Data.user.name !== '') {
						Elements.pageHeaderDesktopUserMenu = Elements.pageHeader.querySelector('[data-screen="desktop"] > .first-line > .container > .block-2 > .user');
						if (Elements.pageHeaderDesktopUserMenu) {
							Elements.pageHeaderDesktopUserMenuUserName = Elements.pageHeaderDesktopUserMenu.querySelector('.user-name');
							Elements.pageHeaderDesktopUserMenuUserIcon = Elements.pageHeaderDesktopUserMenu.querySelector('[data-user="logged"] > .switch > .icon');
							Elements.pageHeaderDesktopUserMenu.dataset.user = 'logged';
							Elements.pageHeaderDesktopUserMenuUserName.textContent = Data.user.name;
							if (Elements.pageHeaderDesktopUserMenuUserIcon) {
								if (typeof Data.user.avatar === 'string' && Data.user.avatar !== '') {
									Elements.pageHeaderDesktopUserMenuUserIcon.classList.add('avatar');
									Elements.pageHeaderDesktopUserMenuUserIcon.style.backgroundImage = `url(${Data.user.avatar})`;
								}
								else {
									Elements.pageHeaderDesktopUserMenuUserIcon.classList.add('font');
								}
							}
						}

						Elements.pageHeaderMobileUserMenu = Elements.pageHeader.querySelector('[data-screen="mobile"] > .container > .menu > .content > .top-line > .container > .user');
						if (Elements.pageHeaderMobileUserMenu) {
							Elements.pageHeaderMobileUserMenuUserName = Elements.pageHeaderMobileUserMenu.querySelector('.user-name');
							Elements.pageHeaderMobileUserMenuUserIcon = Elements.pageHeaderMobileUserMenu.querySelector('[data-user="logged"] > .switch > .icon');
							Elements.pageHeaderMobileUserMenu.dataset.user = 'logged';
							Elements.pageHeaderMobileUserMenuUserName.textContent = Data.user.name;
							if (Elements.pageHeaderMobileUserMenuUserIcon) {
								if (typeof Data.user.avatar === 'string' && Data.user.avatar !== '') {
									Elements.pageHeaderMobileUserMenuUserIcon.classList.add('avatar');
									Elements.pageHeaderMobileUserMenuUserIcon.style.backgroundImage = `url(${Data.user.avatar})`;
								}
								else {
									Elements.pageHeaderMobileUserMenuUserIcon.classList.add('font');
								}
							}
						}
					}
				}
			};
		}());
		/* /////////////////////////////////////////////////////////////////////////////////////////// */

		/** @function addFunctionFillPageArticle */
		(function addFunctionFillPageArticle() {
			const functionName = 'fillPageArticle';

			/** @function fillPageArticle */
			F[functionName] = function fillPageArticle(pageType) {
				// console.log(`${mainName}.${moduleName}.${functionName}`, arguments);
				F.findElements();
				F.setPageType(pageType);
				F.fillElementPageHeader();
				F.addEventsToPageHeader();
				F.addEventsToPageFooter();
				window.addEventListener('load', F.insertImage);
				window.addEventListener('load', F.processElementsForShowingVideo);
				window.addEventListener('load', () => {
					F.placeGroupCardContainer('load');
				});
			};
		}());
		/* /////////////////////////////////////////////////////////////////////////////////////////// */

		/** @function addFunctionFillPageAuthorization */
		(function addFunctionFillPageAuthorization() {
			const functionName = 'fillPageAuthorization';

			/** @function fillPageAuthorization */
			F[functionName] = function fillPageAuthorization(pageType) {
				// console.log(`${mainName}.${moduleName}.${functionName}`, arguments);
				F.findElements();
				F.setPageType(pageType);
				F.fillElementPageHeader();
				F.addEventsToPageHeader();
				F.addEventsToPageFooter();
			};
		}());
		/* /////////////////////////////////////////////////////////////////////////////////////////// */

		/** @function addFunctionFillPageBasket */
		(function addFunctionFillPageBasket() {
			const functionName = 'fillPageBasket';

			/** @function fillPageBasket */
			F[functionName] = function fillPageBasket(pageType) {
				// console.log(`${mainName}.${moduleName}.${functionName}`, arguments);
				F.findElements();
				F.setPageType(pageType);
				F.fillElementPageHeader();
				F.addEventsToPageHeader();
				F.addEventsToPageFooter();
				window.addEventListener('load', F.insertImage);
				window.addEventListener('load', F.processElementsForShowingVideo);
			};
		}());
		/* /////////////////////////////////////////////////////////////////////////////////////////// */

		/** @function addFunctionFillPageBrand */
		(function addFunctionFillPageBrand() {
			const functionName = 'fillPageBrand';

			/** @function fillPageBrand */
			F[functionName] = function fillPageBrand(pageType) {
				// console.log(`${mainName}.${moduleName}.${functionName}`, arguments);
				F.findElements();
				F.setPageType(pageType);
				F.fillElementPageHeader();
				F.addEventsToPageHeader();
				F.addEventsToPageFooter();
				window.addEventListener('load', F.insertImage);
				window.addEventListener('load', F.processElementsForShowingVideo);
			};
		}());
		/* /////////////////////////////////////////////////////////////////////////////////////////// */

		/** @function addFunctionFillPageBrands */
		(function addFunctionFillPageBrands() {
			const functionName = 'fillPageBrands';

			/** @function fillPageBrands */
			F[functionName] = function fillPageBrands(pageType) {
				// console.log(`${mainName}.${moduleName}.${functionName}`, arguments);
				F.findElements();
				F.setPageType(pageType);
				F.fillElementPageHeader();
				F.addEventsToPageHeader();
				F.addEventsToPageFooter();
			};
		}());
		/* /////////////////////////////////////////////////////////////////////////////////////////// */

		/** @function addFunctionFillPageContacts */
		(function addFunctionFillPageContacts() {
			const functionName = 'fillPageContacts';

			/** @function fillPageContacts */
			F[functionName] = function fillPageContacts(pageType) {
				// console.log(`${mainName}.${moduleName}.${functionName}`, arguments);
				let
					currentDayElement;

				F.findElements();
				F.setPageType(pageType);
				F.fillElementPageHeader();
				F.addEventsToPageHeader();
				F.addEventsToPageFooter();
				window.addEventListener('load', F.insertImage);
				window.addEventListener('load', F.processElementsForShowingVideo);
				if (Data.shop.weekday) {
					currentDayElement = document.querySelector(`.shopping-hours > [data-weekday="${Data.shop.weekday}"]`);
					if (currentDayElement) {
						currentDayElement.classList.add('current');
					}
				}
			};
		}());
		/* /////////////////////////////////////////////////////////////////////////////////////////// */

		/** @function addFunctionFillPageDefault */
		(function addFunctionFillPageDefault() {
			const functionName = 'fillPageDefault';

			/** @function fillPageDefault */
			F[functionName] = function fillPageDefault(pageType) {
				// console.log(`${mainName}.${moduleName}.${functionName}`, arguments);
				F.findElements();
				F.setPageType(pageType);
				F.fillElementPageHeader();
				F.addEventsToPageHeader();
				F.addEventsToPageFooter();
				window.addEventListener('load', F.insertImage);
				window.addEventListener('load', F.processElementsForShowingVideo);
			};
		}());
		/* /////////////////////////////////////////////////////////////////////////////////////////// */

		/** @function addFunctionFillPageFinish */
		(function addFunctionFillPageFinish() {
			const functionName = 'fillPageFinish';

			/** @function fillPageFinish */
			F[functionName] = function fillPageFinish(pageType) {
				// console.log(`${mainName}.${moduleName}.${functionName}`, arguments);
				F.findElements();
				F.setPageType(pageType);
				F.fillElementPageHeader();
				F.addEventsToPageHeader();
				F.addEventsToPageFooter();
				window.addEventListener('load', F.insertImage);
				window.addEventListener('load', F.processElementsForShowingVideo);
			};
		}());
		/* /////////////////////////////////////////////////////////////////////////////////////////// */

		/** @function addFunctionFillPageHistory */
		(function addFunctionFillPageHistory() {
			const functionName = 'fillPageHistory';

			/** @function fillPageHistory */
			F[functionName] = function fillPageHistory(pageType) {
				// console.log(`${mainName}.${moduleName}.${functionName}`, arguments);
				F.findElements();
				F.setPageType(pageType);
				F.fillElementPageHeader();
				F.addEventsToPageHeader();
				F.addEventsToPageFooter();
				Elements.orderSwitches = document.querySelectorAll('main .user-cabinet .second .order .switch');
				Array.prototype.forEach.call(Elements.orderSwitches, (element) => {
					element.addEventListener('click', (event) => {
						const
							el = event.currentTarget;

						el.parentElement.classList.toggle('open');
					});
				});
			};
		}());
		/* /////////////////////////////////////////////////////////////////////////////////////////// */

		/** @function addFunctionFillPageIndex */
		(function addFunctionFillPageIndex() {
			const functionName = 'fillPageIndex';

			/** @function fillPageIndex */
			F[functionName] = function fillPageIndex(pageType) {
				// console.log(`${mainName}.${moduleName}.${functionName}`, arguments);
				F.findElements();
				F.setPageType(pageType);
				F.fillElementPageHeader();
				F.addEventsToPageHeader();
				F.addEventsToPageFooter();
				window.addEventListener('load', F.insertImage);
				window.addEventListener('load', F.processElementsForShowingVideo);
			};
		}());
		/* /////////////////////////////////////////////////////////////////////////////////////////// */

		/** @function addFunctionFillPageJournal */
		(function addFunctionFillPageJournal() {
			const functionName = 'fillPageJournal';

			/** @function fillPageJournal */
			F[functionName] = function fillPageJournal(pageType) {
				// console.log(`${mainName}.${moduleName}.${functionName}`, arguments);
				F.findElements();
				F.setPageType(pageType);
				F.fillElementPageHeader();
				F.addEventsToPageHeader();
				F.addEventsToPageFooter();
				window.addEventListener('load', F.insertImage);
			};
		}());
		/* /////////////////////////////////////////////////////////////////////////////////////////// */

		/** @function addFunctionFillPageOrder */
		(function addFunctionFillPageOrder() {
			const functionName = 'fillPageOrder';

			/** @function fillPageOrder */
			F[functionName] = function fillPageOrder(pageType) {
				// console.log(`${mainName}.${moduleName}.${functionName}`, arguments);
				F.findElements();
				F.setPageType(pageType);
				F.fillElementPageHeader();
				F.addEventsToPageHeader();
				F.addEventsToPageFooter();
				window.addEventListener('load', F.insertImage);
				window.addEventListener('load', F.processElementsForShowingVideo);
			};
		}());
		/* /////////////////////////////////////////////////////////////////////////////////////////// */

		/** @function addFunctionFillPageProduct */
		(function addFunctionFillPageProduct() {
			const functionName = 'fillPageProduct';

			/** @function fillPageProduct */
			F[functionName] = function fillPageProduct(pageType) {
				// console.log(`${mainName}.${moduleName}.${functionName}`, arguments);
				let addToBasketElement;
				const layerAddedToBasketElement = document.querySelector('[data-layer-type="added-to-basket"]');
				const closeLayerAddedToBasketElement = document.querySelector('[data-close-layer="added-to-basket"]');
				const mainProductInfoElement = document.querySelector('main > .standard-container > .blocks > .main-info');
				const similarProductsElement = document.querySelector('#similarProducts');

				F.findElements();
				F.setPageType(pageType);
				F.fillElementPageHeader();
				F.addEventsToPageHeader();
				F.addEventsToPageFooter();
				F.addEventsToLayer();
				window.addEventListener('load', F.insertImage);
				window.addEventListener('load', F.processElementsForShowingVideo);
				if (window.$ && window.$('#royalSlider').length > 0) {
					$('#royalSlider').royalSlider({
						'fullscreen': {
							'enabled': true,
							'nativeFS': true,
						},
						'controlNavigation': 'thumbnails',
						'loop': true,
						'arrowsNavHideOnTouch': true,
						'keyboardNavEnabled': true,
						'globalCaptionInside': false,
						'thumbs': {
							'appendSpan': true,
						},
					});
				}
				window.addEventListener('resize', F.updateRoyalSliderSize);
				if (mainProductInfoElement) {
					addToBasketElement = mainProductInfoElement.querySelector('.blocks > .first > .basket > button.green');
				}
				if (addToBasketElement && similarProductsElement) {
					addToBasketElement.addEventListener('click', () => {
						layerAddedToBasketElement.classList.add('open');
						mainProductInfoElement.classList.add('in-basket');
					});
				}
				if (closeLayerAddedToBasketElement) {
					closeLayerAddedToBasketElement.addEventListener('click', () => {
						layerAddedToBasketElement.classList.remove('open');
					});
				}
			};
		}());
		/* /////////////////////////////////////////////////////////////////////////////////////////// */

		/** @function addFunctionFillPageProductGroup */
		(function addFunctionFillPageProductGroup() {
			const functionName = 'fillPageProductGroup';

			/** @function fillPageProductGroup */
			F[functionName] = function fillPageProductGroup(pageType) {
				// console.log(`${mainName}.${moduleName}.${functionName}`, arguments);
				F.findElements();
				F.setPageType(pageType);
				F.fillElementPageHeader();
				F.addEventsToPageHeader();
				F.addEventsToPageFooter();
				window.addEventListener('load', F.insertImage);
				window.addEventListener('load', F.processElementsForShowingVideo);
				F.processRawCataloguesData();
				Modules.catalogue.F.show({
					'catalogueValue': Variables.catalogues.get('products'),
					'processFilteringInterface': 'doAll',
					'showSortingInterface': true,
				});
			};
		}());
		/* /////////////////////////////////////////////////////////////////////////////////////////// */

		/** @function addFunctionFillPageResponse */
		(function addFunctionFillPageResponse() {
			const functionName = 'fillPageResponse';

			/** @function fillPageResponse */
			F[functionName] = function fillPageResponse(pageType) {
				// console.log(`${mainName}.${moduleName}.${functionName}`, arguments);
				F.findElements();
				F.setPageType(pageType);
				F.fillElementPageHeader();
				F.addEventsToPageHeader();
				F.addEventsToPageFooter();
			};
		}());
		/* /////////////////////////////////////////////////////////////////////////////////////////// */

		/** @function addFunctionFillPageUser */
		(function addFunctionFillPageUser() {
			const functionName = 'fillPageUser';

			/** @function fillPageUser */
			F[functionName] = function fillPageUser(pageType) {
				// console.log(`${mainName}.${moduleName}.${functionName}`, arguments);
				F.findElements();
				F.setPageType(pageType);
				F.fillElementPageHeader();
				F.addEventsToPageHeader();
				F.addEventsToPageFooter();
			};
		}());
		/* /////////////////////////////////////////////////////////////////////////////////////////// */

		/** @function addFunctionInsertImage */
		(function addFunctionInsertImage() {
			const functionName = 'insertImage';

			/** @function insertImage */
			F[functionName] = function insertImage() {
				// console.log(`${mainName}.${moduleName}.${functionName}`, arguments);
				const imgSrcItems = document.querySelectorAll('[data-for-insert-img-src]');
				const imgUrlItems = document.querySelectorAll('[data-for-insert-img-url]');

				Array.prototype.forEach.call(
					imgSrcItems,
					(item) => {
						item.innerHTML = `<img src="${item.dataset.forInsertImgSrc}" alt="${item.dataset.forInsertImgAlt}">`;
					}
				);

				Array.prototype.forEach.call(
					imgUrlItems,
					(item) => {
						item.style.backgroundImage = `url(${item.dataset.forInsertImgUrl})`;
					}
				);
			};
		}());
		/* /////////////////////////////////////////////////////////////////////////////////////////// */

		/** @function addFunctionProcessElementsForShowingVideo */
		(function addFunctionProcessElementsForShowingVideo() {
			const functionName = 'processElementsForShowingVideo';

			/** @function processElementsForShowingVideo */
			F[functionName] = function processElementsForShowingVideo() {
				// console.log(`${mainName}.${moduleName}.${functionName}`, arguments);

				F[functionName].insertVideoImage();
			};

			/** @function insertVideoImage
				* search elements with selector [data-video-type]
				* insert image for video
				* add event listener to
				*/
			F[functionName].insertVideoImage = function insertVideoImage() {
				// console.log(`${mainName}.${moduleName}.${functionName}.insertVideoImage`, arguments);
				// search elements with given selector
				const figureVideoElements = document.querySelectorAll('[data-video-type]');

				if (figureVideoElements) {
					// insert image for video of specified type
					Array.prototype.forEach.call(figureVideoElements, (element) => {
						if (element.dataset.videoId) {
							switch (element.dataset.videoType) {
								case 'youtube':
									element.insertAdjacentHTML(
										'beforeend',
										`<div class="content" style="background-image: url(https://i1.ytimg.com/vi/${element.dataset.videoId}/hqdefault.jpg);"></div>`
									);
									element.querySelector('.content').addEventListener('click', F[functionName].insertVideoFrame);
									break;
								case 'vimeo':
									if (element.dataset.videoImageId) {
										element.insertAdjacentHTML(
											'beforeend',
											`<div class="content" style="background-image: url(https://i.vimeocdn.com/video/${element.dataset.videoImageId}_640x338.jpg);"></div>`
										);
										element.querySelector('.content').addEventListener('click', F[functionName].insertVideoFrame);
									}
									break;
							}
							element.insertAdjacentHTML(
								'beforeend',
								`<figcaption class="name">${element.dataset.videoCaption || ''}</figcaption>`
							);
						}
					});
				}
			};

			/** @function insertVideoFrame
				* insert frame for viewing video
				*/
			F[functionName].insertVideoFrame = function insertVideoFrame(event) {
				// console.log(`${mainName}.${moduleName}.${functionName}.insertVideoFrame`, arguments);
				const element = event.currentTarget.parentElement;

				switch (element.dataset.videoType) {
					case 'youtube':
						element.querySelector('.content').innerHTML = `
							<iframe class="youtube-iframe" src="https://www.youtube.com/embed/${element.dataset.videoId}" allowfullscreen></iframe>
						`;
						break;
					case 'vimeo':
						element.querySelector('.content').innerHTML = `
							<iframe src="https://player.vimeo.com/video/${element.dataset.videoId}" allow="autoplay; fullscreen" allowfullscreen></iframe><script src="https://player.vimeo.com/api/player.js"></script>
						`;
						break;
				}
			};
		}());
		/* /////////////////////////////////////////////////////////////////////////////////////////// */

		/** @function addFunctionRemoveChildren */
		(function addFunctionRemoveChildren() {
			const functionName = 'removeChildren';

			/** @function removeChildren
				* safely removes childs from node
				* @param {Node} node — https://developer.mozilla.org/en-US/docs/Web/API/Node
				*/
			F[functionName] = function removeChildren(node) {
				// console.log(`${mainName}.${moduleName}.${functionName}`, arguments);
				while (node.lastChild) {
					if (node.lastChild.childNodes.length > 0) {
						F[functionName](node.lastChild);
					}
					else {
						node.removeChild(node.lastChild);
					}
				}
			};
		}());
		/* /////////////////////////////////////////////////////////////////////////////////////////// */

		/** @function addFunctionSetPageType */
		(function addFunctionSetPageType() {
			const functionName = 'setPageType';

			/** @function setPageType
				* set page type to document body
				* @param {string} pageType — page type
				*/
			F[functionName] = function setPageType(pageType) {
				// console.log(`${mainName}.${moduleName}.${functionName}`, arguments);

				if (pageType) {
					if (typeof pageType === 'string') {
						Elements.body.dataset.pageType = pageType;
					}
					else {
						console.error(`${mainName}.${moduleName}.${functionName}`, arguments, 'typeof pageType is not string');
					}
				}
				else {
					console.error(`${mainName}.${moduleName}.${functionName}`, arguments, 'pageType not set');
				}
			};
		}());
		/* /////////////////////////////////////////////////////////////////////////////////////////// */

		/** @function addFunctionPlaceGroupCardContainer */
		(function addFunctionPlaceGroupCardContainer() {
			const functionName = 'placeGroupCardContainer';

			/** @function placeGroupCardContainer */
			F[functionName] = function placeGroupCardContainer(action) {
				// console.log(`${mainName}.${moduleName}.${functionName}`, arguments);
				switch (action) {
					case 'load':
						Elements.mainBlocksFirst = document.querySelector('main > .blocks > .first');
						Elements.groupCardContainer = document.querySelector('main > .blocks > .second > .group-card-container');
						if (Elements.mainBlocksFirst && Elements.groupCardContainer) {
							Variables.blockStartFixPosition = Elements.mainBlocksFirst.offsetTop + Elements.groupCardContainer.offsetTop - 16;
							Variables.blockEndFixPosition = Elements.mainBlocksFirst.offsetHeight + Elements.mainBlocksFirst.offsetTop - Elements.groupCardContainer.offsetHeight - 32;
							Variables.blockAbsolutePosition = Variables.blockEndFixPosition - Elements.mainBlocksFirst.offsetTop;
							Variables.blockState = 'normal';
							if (window.innerWidth > 1023) {
								if ((window.pageYOffset > Variables.blockStartFixPosition) && (window.pageYOffset < Variables.blockEndFixPosition)) {
									Elements.groupCardContainer.style = 'position: fixed; top: 0; max-width: 284px; width: 100%;';
									Variables.blockState = 'fixed';
								}
								else if (window.pageYOffset >= Variables.blockEndFixPosition) {
									Elements.groupCardContainer.style = `position: absolute; top: ${Variables.blockAbsolutePosition}px;`;
									Variables.blockState = 'absolute';
								}
								else {
									Elements.groupCardContainer.style = '';
									Variables.blockState = 'normal';
								}
							}
							window.addEventListener('scroll', () => {
								F.placeGroupCardContainer('scroll');
							});
							window.addEventListener('resize', () => {
								F.placeGroupCardContainer('resize');
							});
						}
						break;
					case 'scroll':
						if (Elements.mainBlocksFirst && Elements.groupCardContainer && Variables.blockStartFixPosition && Variables.blockEndFixPosition && Variables.blockAbsolutePosition && Variables.blockState) {
							if (window.innerWidth > 1023) {
								if ((window.pageYOffset > Variables.blockStartFixPosition) && (window.pageYOffset < Variables.blockEndFixPosition)) {
									if (Variables.blockState !== 'fixed') {
										Elements.groupCardContainer.style = 'position: fixed; top: 0; max-width: 284px; width: 100%;';
										Variables.blockState = 'fixed';
									}
								}
								else if (window.pageYOffset >= Variables.blockEndFixPosition) {
									if (Variables.blockState !== 'absolute') {
										Elements.groupCardContainer.style = `position: absolute; top: ${Variables.blockAbsolutePosition}px;`;
										Variables.blockState = 'absolute';
									}
								}
								else {
									Elements.groupCardContainer.style = '';
									Variables.blockState = 'normal';
								}
							}
						}
						break;
					case 'resize':
						if (Elements.mainBlocksFirst && Elements.groupCardContainer) {
							Elements.groupCardContainer.style = '';
							Variables.blockStartFixPosition = Elements.mainBlocksFirst.offsetTop + Elements.groupCardContainer.offsetTop - 16;
							Variables.blockEndFixPosition = Elements.mainBlocksFirst.offsetHeight + Elements.mainBlocksFirst.offsetTop - Elements.groupCardContainer.offsetHeight - 32;
							Variables.blockAbsolutePosition = Variables.blockEndFixPosition - Elements.mainBlocksFirst.offsetTop;
							Variables.blockState = 'normal';
							if (window.innerWidth > 1023) {
								if ((window.pageYOffset > Variables.blockStartFixPosition) && (window.pageYOffset < Variables.blockEndFixPosition)) {
									Elements.groupCardContainer.style = 'position: fixed; top: 0; max-width: 284px; width: 100%;';
									Variables.blockState = 'fixed';
								}
								else if (window.pageYOffset >= Variables.blockEndFixPosition) {
									Elements.groupCardContainer.style = `position: absolute; top: ${Variables.blockAbsolutePosition}px;`;
									Variables.blockState = 'absolute';
								}
								else {
									Elements.groupCardContainer.style = '';
									Variables.blockState = 'normal';
								}
							}
							else {
								Elements.groupCardContainer.style = '';
								Variables.blockState = 'normal';
							}
						}
						break;
				}
			};
		}());
		/* /////////////////////////////////////////////////////////////////////////////////////////// */

		/** @function addFunctionProcessRawCataloguesData */
		(function addFunctionProcessRawCataloguesData() {
			const functionName = 'processRawCataloguesData';

			/** @function processRawCataloguesData */
			F[functionName] = function processRawCataloguesData() {
				// console.log(`${mainName}.${moduleName}.${functionName}`, arguments);
				if (!Variables.catalogues) {
					Variables.catalogues = new Map([]);
				}
				if (Data.catalogues && Data.catalogues.size > 0) {
					Data.catalogues.forEach((value, key) => {
						const result = Modules.catalogue.F.processRawData(value);

						if (typeof result === 'object') {
							Variables.catalogues.set(key, result);
							result.pointToInsertCatalogue = result.itemsInterfaceElement.parentElement;
							result.itemsInterfaceElementClone = result.itemsInterfaceElement.cloneNode();
						}

						// console.log(result);
					});
				}
				// console.log(`${mainName}.Variables.catalogues`, Variables.catalogues);
			};
		}());
		/* /////////////////////////////////////////////////////////////////////////////////////////// */

		/** @function addFunctionShowCatalogueProducts */
		(function addFunctionShowCatalogueProducts() {
			const functionName = 'showCatalogueProducts';

			/** @function showCatalogueProducts */
			F[functionName] = function showCatalogueProducts(catalogueValue, reason) {
				// console.log(`${mainName}.${moduleName}.${functionName}`, arguments);
				let timeoutID;
				const temporaryClone = catalogueValue.itemsInterfaceElementClone.cloneNode();
				let source;

				if (typeof catalogueValue === 'object') {
					// choose source for generating catalogue
					if (catalogueValue.itemsKeysForShow) {
						source = catalogueValue.itemsKeysForShow;
					}
					else {
						source = catalogueValue.items;
					}

					// generate catalogue adding items HTML
					source.forEach((catalogueItemKey) => {
						const catalogueItemValue = catalogueValue.items.get(catalogueItemKey);

						if (typeof catalogueItemValue === 'object') {
							temporaryClone.insertAdjacentHTML('beforeend', `
								<div class="product ${catalogueItemValue.action || ''} ${catalogueItemValue.availability || ''}" data-product-key="${catalogueItemKey}">
									<div class="image"><img src="${catalogueItemValue.productImageUrl}" alt="${(catalogueItemValue.productDescription || '')}"></div>
									<div class="name"><a href="${catalogueItemValue.productUrl}">${catalogueItemValue.productProducerName}</a></div>
									<div class="price">
										<span class="new-price">${catalogueItemValue.productPrice} ${catalogueItemValue.productPriceCurrency}</span>
										<span class="old-price" data-old-price="${catalogueItemValue.productOldPrice}">${catalogueItemValue.productOldPrice} ${catalogueItemValue.productPriceCurrency}</span>
									</div>
									<div class="availability"></div>
									<div class="button-container"><div class="button"></div></div>
									<div class="action-label"></div>
								</div>
							`);
						}
					});

					// safely remove childs from catalogue parent
					// console.time('removeChildren');
					F.removeChildren(catalogueValue.pointToInsertCatalogue);
					// console.timeEnd('removeChildren');

					// process catalogue before their showing
					if (catalogueValue.functionToProcessCatalogueBeforeShowing) {
						catalogueValue.functionToProcessCatalogueBeforeShowing(temporaryClone);
					}

					// append catalogue items to its parent
					catalogueValue.pointToInsertCatalogue.appendChild(temporaryClone);

					// process Elements.pageFooterNotification to show catalogue changes
					// set function to process events on Elements.pageFooterNotificationLink
					F.processEvents.processPageFooterNotificationLink.func = function processPageFooterNotificationLinkForCatalogueProductsChanges() {
						switch (Elements.pageFooterNotification.dataset.action) {
							case 'sorting': {
								catalogueValue.itemsInterfaceElement.scrollIntoView();
								if (window.innerWidth < 1024) {
									window.scrollBy(0, -64);
								}
								break;
							}
							case 'filtering': {
								switch (catalogueValue.filtering.interfaceType) {
									case 'products': {
										const filteringMenuElement = document.querySelector(catalogueValue.filtering.interfaces.filteringMenuElement.selector);

										filteringMenuElement.classList.remove('open');
										filteringMenuElement.scrollIntoView();
										if (window.innerWidth < 1024) {
											window.scrollBy(0, -64);
										}
										break;
									}
								}
								break;
							}
						}
					};
					Elements.pageFooterNotification.classList.remove('enable');
					Elements.pageFooterNotificationLink.classList.remove('enable');
					timeoutID = window.setTimeout(() => {
						if (catalogueValue.itemsKeysForShow.size > 0) {
							Elements.pageFooterNotificationLink.classList.add('enable');
						}
						switch (reason) {
							case 'sorting':
								if (catalogueValue.itemsKeysForShow.size > 1) {
									Elements.pageFooterNotificationText.innerText = catalogueValue.sorting.items.get(catalogueValue.sorting.currentState).name;
									Elements.pageFooterNotification.dataset.action = reason;
									Elements.pageFooterNotification.classList.add('enable');
								}
								break;
							case 'filtering':
								Elements.pageFooterNotificationText.innerText = catalogueValue.itemsKeysForShow.size;
								Elements.pageFooterNotification.dataset.action = reason;
								Elements.pageFooterNotification.classList.add('enable');
								break;
						}
						window.clearTimeout(timeoutID);
					}, 100);
				}
				else {
					console.error(`${mainName}.${moduleName}.${functionName}`, arguments, `'catalogueValue' is not object '${catalogueValue}'`);
				}
			};
		}());
		/* /////////////////////////////////////////////////////////////////////////////////////////// */

		/** @function addFunctionUpdateRoyalSliderSize */
		(function addFunctionUpdateRoyalSliderSize() {
			const functionName = 'updateRoyalSliderSize';

			/** @function updateRoyalSliderSize */
			F[functionName] = function updateRoyalSliderSize() {
				// console.log(mainName, moduleName, functionName, arguments);
				let timeoutID;

				if (window.$) {
					if (Elements.royalSlider) {
						window.$('#royalSlider').royalSlider('updateSliderSize', true);
						timeoutID = window.setTimeout(() => {
							// console.log('update royal slider');
							window.$('#royalSlider').royalSlider('updateSliderSize', true);
							window.clearTimeout(timeoutID);
						}, 400);
					}
				}
			};
		}());
		/* /////////////////////////////////////////////////////////////////////////////////////////// */

		Modules[moduleName] = module;
	}());
	/* /////////////////////////////////////////////////////////////////////////////////////////// */

	/** @function catalogue */
	(function addModuleCatalogue() {
		const moduleName = 'catalogue';
		const module = function ModuleCatalogue() {
			// console.log(`${mainName}.${moduleName}`);

			// F.processDataForModule(dataForModule);
		};

		module.F = {}; // Functions
		const F = module.F;

		/** @function processDataForModule */
		(function addFunctionProcessDataForModule() {
			const functionName = 'processDataForModule';

			/** @function processDataForModule */
			F[functionName] = function processDataForModule() {
				// console.log(`${mainName}.${moduleName}.${functionName}`, arguments);
			};
		}());
		/* /////////////////////////////////////////////////////////////////////////////////////////// */

		/** @function addFunctionProcessRawData */
		(function addFunctionProcessRawData() {
			const functionName = 'processRawData';

			/** @function processRawData */
			F[functionName] = function processRawData(argument) {
				// console.log(`${mainName}.${moduleName}.${functionName}`, arguments);
				if (typeof argument === 'object') {
					const
						result = {
							'filtering': {
								'data': new Map([]),
								'currentState': new Map([]),
								'properties': new Map([]),
							},
							'sorting': {
								'enabled': false,
								'switchInterfaceEnabled': undefined,
								'switchInterfaceElement': undefined,
								'items': new Map([]),
								'itemsInterfaceType': undefined,
								'itemsInterfaceElement': undefined,
								'currentState': undefined,
							},
							'items': new Map([]),
							'itemsInterfaceElement': undefined,
						};

					if (typeof argument.functionToShowCatalogue === 'function') {
						result.functionToShowCatalogue = argument.functionToShowCatalogue;
						if (typeof argument.functionToProcessCatalogueBeforeShowing === 'function') {
							result.functionToProcessCatalogueBeforeShowing = argument.functionToProcessCatalogueBeforeShowing;
						}
						if (typeof argument.itemsInterfaceSelector === 'string' && argument.itemsInterfaceSelector !== '') {
							result.itemsInterfaceElement = document.querySelector(argument.itemsInterfaceSelector);
							if (result.itemsInterfaceElement) {
								if (typeof argument.items === 'object' && argument.items.size > 0) {
									// process raw items data
									argument.items.forEach(function checkCatalogueItem(catalogueItemValue, catalogueItemKey) {
										if (typeof catalogueItemValue === 'object') {
											result.items.set(catalogueItemKey, catalogueItemValue);
										}
										else {
											console.error(`${mainName}.${moduleName}.${functionName}`, arguments, `'catalogueItemValue' is not object '${catalogueItemValue}'`);
										}
									});
									if (result.items.size > 0) {
										// process raw sorting data
										if (typeof argument.sorting === 'object') {
											if (argument.sorting.enabled === true) {
												switch (argument.sorting.itemsInterfaceType) {
													case 'menu': // may be other type
														result.sorting.itemsInterfaceType = argument.sorting.itemsInterfaceType;
														if (typeof argument.sorting.itemsInterfaceSelector === 'string' && argument.sorting.itemsInterfaceSelector !== '') {
															result.sorting.itemsInterfaceElement = document.querySelector(argument.sorting.itemsInterfaceSelector);
															if (result.sorting.itemsInterfaceElement) {
																result.sorting.itemsInterfaceSelector = argument.sorting.itemsInterfaceSelector;
																if (typeof argument.sorting.items === 'object' && argument.sorting.items.size > 0) {
																	argument.sorting.items.forEach(function checkSortingProperty(sortingItemValue, sortingItemKey) {
																		if (typeof sortingItemValue === 'object') {
																			if (typeof sortingItemValue.name === 'string' && sortingItemValue.name !== '') {
																				if (typeof sortingItemValue.property === 'string' && sortingItemValue.property !== '') {
																					if (typeof sortingItemValue.type === 'string' && sortingItemValue.type !== '') {
																						if (typeof sortingItemValue.order === 'string' && sortingItemValue.order !== '') {
																							result.sorting.items.set(sortingItemKey, sortingItemValue);
																						}
																						else {
																							console.error(`${mainName}.${moduleName}.${functionName}`, arguments, `'sortingItemValue.order' is bad '${sortingItemValue.order}'`);
																						}
																					}
																					else {
																						console.error(`${mainName}.${moduleName}.${functionName}`, arguments, `'sortingItemValue.type' is bad '${sortingItemValue.type}'`);
																					}
																				}
																				else {
																					console.error(`${mainName}.${moduleName}.${functionName}`, arguments, `'sortingItemValue.property' is bad '${sortingItemValue.property}'`);
																				}
																			}
																			else {
																				console.error(`${mainName}.${moduleName}.${functionName}`, arguments, `'sortingItemValue.name' is bad '${sortingItemValue.name}'`);
																			}
																		}
																		else {
																			console.error(`${mainName}.${moduleName}.${functionName}`, arguments, `'sortingItemValue' is not object '${sortingItemValue}'`);
																		}
																	});
																}
																else {
																	console.error(`${mainName}.${moduleName}.${functionName}`, arguments, `'argument.sorting.items' is bad '${argument.sorting.items}'`);
																}
															}
															else {
																console.error(`${mainName}.${moduleName}.${functionName}`, arguments, `'result.sorting.itemsInterfaceElement' not found '${argument.sorting.itemsInterfaceSelector}'`);
															}
														}
														else {
															console.error(`${mainName}.${moduleName}.${functionName}`, arguments, `'argument.sorting.itemsInterfaceSelector' is bad '${argument.sorting.itemsInterfaceSelector}'`);
														}
														if (result.sorting.items.size > 0) {
															if (argument.sorting.switchInterfaceEnabled === true) {
																if (typeof argument.sorting.switchInterfaceSelector === 'string' && argument.sorting.switchInterfaceSelector !== '') {
																	result.sorting.switchInterfaceElement = document.querySelector(argument.sorting.switchInterfaceSelector);
																	if (result.sorting.switchInterfaceElement) {
																		result.sorting.switchInterfaceSelector = argument.sorting.switchInterfaceSelector;
																		result.sorting.switchInterfaceEnabled = true;
																		result.sorting.enabled = true;
																	}
																	else {
																		console.error(`${mainName}.${moduleName}.${functionName}`, arguments, `'result.sorting.switchInterfaceElement' not found '${argument.sorting.switchInterfaceSelector}'`);
																	}
																}
																else {
																	console.error(`${mainName}.${moduleName}.${functionName}`, arguments, `'argument.sorting.switchInterfaceSelector' is bad '${argument.sorting.switchInterfaceSelector}'`);
																}
															}
															else if (argument.sorting.switchInterfaceEnabled === false) {
																result.sorting.switchInterfaceEnabled = false;
																result.sorting.enabled = true;
															}
														}
														break;
												}
											}
										}
										else {
											console.error(`${mainName}.${moduleName}.${functionName}`, arguments, `'argument.sorting' is not object '${argument.sorting}'`);
										}

										// process raw filtering data
										if (typeof argument.filtering === 'object') {
											if (argument.filtering.enabled === true) {
												if (typeof argument.filtering.data === 'object' && argument.filtering.data.size > 0) {
													argument.filtering.data.forEach(function checkFilteringProperty(propertyDataValue, propertyDataKey) {
														if (typeof propertyDataValue === 'object') {
															if (!(typeof propertyDataValue.name === 'string' && propertyDataValue.name !== '')) {
																console.error(`${mainName}.${moduleName}.${functionName}`, arguments, `'propertyDataValue.name' is bad '${propertyDataValue.name}'`);
																return;
															}
															if (!(typeof propertyDataValue.property === 'string' && propertyDataValue.property !== '')) {
																console.error(`${mainName}.${moduleName}.${functionName}`, arguments, `'propertyDataValue.property' is bad '${propertyDataValue.property}'`);
																return;
															}
															if (!(typeof propertyDataValue.order === 'string' && propertyDataValue.order !== '')) {
																console.error(`${mainName}.${moduleName}.${functionName}`, arguments, `'propertyDataValue.order' is bad '${propertyDataValue.order}'`);
																return;
															}
															if (!(typeof propertyDataValue.type === 'string' && propertyDataValue.type !== '')) {
																console.error(`${mainName}.${moduleName}.${functionName}`, arguments, `'propertyDataValue.type' is bad '${propertyDataValue.type}'`);
																return;
															}
															switch (propertyDataValue.type) {
																case 'string':
																case 'number':
																	result.filtering.data.set(propertyDataKey, propertyDataValue);
																	break;
																case 'fillOrEmptyString':
																	if (!(typeof propertyDataValue.valuesReplacement === 'object'
																		&& typeof propertyDataValue.valuesReplacement.fill === 'string'
																		&& propertyDataValue.valuesReplacement.fill !== ''
																		&& typeof propertyDataValue.valuesReplacement.empty === 'string'
																		&& propertyDataValue.valuesReplacement.empty !== '')
																	) {
																		propertyDataValue.valuesReplacement = { 'fill': 'true', 'empty': 'false', };
																	}
																	result.filtering.data.set(propertyDataKey, propertyDataValue);
																	break;
															}
														}
														else {
															console.error(`${mainName}.${moduleName}.${functionName}`, arguments, `'propertyDataValue' is not object '${propertyDataValue}'`);
														}
													});
													if (result.filtering.data.size > 0) {
														result.filtering.data.forEach((propertyDataValue, propertyDataKey) => {
															let values;
															const propertyValuesSet = new Set([]);

															result.items.forEach(function addPropertyToPropertySet(catalogueItemValue, catalogueItemKey) {
																let
																	property;

																if (Object.prototype.hasOwnProperty.call(catalogueItemValue, propertyDataValue.property)) {
																	property = catalogueItemValue[propertyDataValue.property];
																	switch (propertyDataValue.type) {
																		case 'string':
																			if (typeof property === 'string') {
																				if (property !== '') {
																					propertyValuesSet.add(property);
																				}
																			}
																			else {
																				console.error(`${mainName}.${moduleName}.${functionName}`, arguments, `'catalogueItemValue.property' must be string '${property}'`);
																			}
																			break;
																		case 'fillOrEmptyString':
																			if (typeof property === 'string') {
																				if (property !== '') {
																					propertyValuesSet.add(1);
																				}
																				else {
																					propertyValuesSet.add(0);
																				}
																			}
																			else {
																				console.error(`${mainName}.${moduleName}.${functionName}`, arguments, `'catalogueItemValue.property' is not string '${property}'`);
																			}
																			break;
																		case 'number':
																			if (typeof property === 'number') {
																				propertyValuesSet.add(property);
																			}
																			else {
																				console.error(`${mainName}.${moduleName}.${functionName}`, arguments, `'catalogueItemValue.property' is not number '${property}'`);
																			}
																			break;
																	}
																}
															});

															if (propertyValuesSet.size > 1) {
																values = [ ...propertyValuesSet, ];
																switch (propertyDataValue.type) {
																	case 'string':
																		switch (propertyDataValue.order) {
																			case 'ab':
																				values.sort((a, b) => a.localeCompare(b));
																				break;
																			case 'ba':
																				values.sort((a, b) => b.localeCompare(a));
																				break;
																		}
																		break;
																	case 'fillOrEmptyString':
																		switch (propertyDataValue.order) {
																			case 'ef':
																				values.sort((a, b) => a - b);
																				break;
																			case 'fe':
																				values.sort((a, b) => b - a);
																				break;
																		}
																		break;
																	case 'number':
																		switch (propertyDataValue.order) {
																			case '01':
																				values.sort((a, b) => a - b);
																				break;
																			case '10':
																				values.sort((a, b) => b - a);
																				break;
																		}
																		break;
																}
																result.filtering.properties.set(propertyDataKey, {
																	'name': propertyDataValue.name, 'property': propertyDataValue.property, 'type': propertyDataValue.type, 'valuesReplacement': propertyDataValue.valuesReplacement, values,
																});
															}
														});
														if (result.filtering.properties.size > 0) {
															result.filtering.enabled = true;
															if (argument.filtering.interfaceEnabled === true) {
																switch (argument.filtering.interfaceType) {
																	case 'products': {
																		let element;
																		const interfaces = {
																			'additionalSwitchElement': {
																			},
																			'collapseElement': {
																			},
																			'blocksElement': {
																			},
																			'filteringMenuElement': {
																			},
																			'propertiesContainerElement': {
																			},
																			'resetElement': {
																			},
																			'switchElement': {
																			},
																			'showMorePropertyValues': {
																			},
																		};

																		if (typeof argument.filtering.interfaces === 'object') {
																			if (typeof argument.filtering.interfaces.switchElement === 'object') {
																				if (typeof argument.filtering.interfaces.switchElement.selector === 'string' && argument.filtering.interfaces.switchElement.selector !== '') {
																					element = document.querySelector(argument.filtering.interfaces.switchElement.selector);
																					if (element) {
																						interfaces.switchElement.selector = argument.filtering.interfaces.switchElement.selector;
																					}
																					else {
																						console.error(`${mainName}.${moduleName}.${functionName}`, arguments, `'argument.filtering.interfaces.switchElement.selector' is bad '${argument.filtering.interfaces.switchElement.selector}'`);
																						break;
																					}
																				}
																				else {
																					console.error(`${mainName}.${moduleName}.${functionName}`, arguments, `'argument.filtering.interfaces.switchElement.selector' is bad '${argument.filtering.interfaces.switchElement.selector}'`);
																					break;
																				}
																			}
																			else {
																				console.error(`${mainName}.${moduleName}.${functionName}`, arguments, `'argument.filtering.interfaces.switchElement' is not object '${argument.filtering.interfaces.switchElement}'`);
																				break;
																			}
																			if (typeof argument.filtering.interfaces.additionalSwitchElement === 'object') {
																				if (typeof argument.filtering.interfaces.additionalSwitchElement.selector === 'string' && argument.filtering.interfaces.additionalSwitchElement.selector !== '') {
																					element = document.querySelector(argument.filtering.interfaces.additionalSwitchElement.selector);
																					if (element) {
																						interfaces.additionalSwitchElement.selector = argument.filtering.interfaces.additionalSwitchElement.selector;
																					}
																					else {
																						console.error(`${mainName}.${moduleName}.${functionName}`, arguments, `'argument.filtering.interfaces.additionalSwitchElement.selector' is bad '${argument.filtering.interfaces.additionalSwitchElement.selector}'`);
																						break;
																					}
																				}
																				else {
																					console.error(`${mainName}.${moduleName}.${functionName}`, arguments, `'argument.filtering.interfaces.additionalSwitchElement.selector' is bad '${argument.filtering.interfaces.additionalSwitchElement.selector}'`);
																					break;
																				}
																			}
																			else {
																				console.error(`${mainName}.${moduleName}.${functionName}`, arguments, `'argument.filtering.interfaces.additionalSwitchElement' is not object '${argument.filtering.interfaces.additionalSwitchElement}'`);
																				break;
																			}
																			if (typeof argument.filtering.interfaces.collapseElement === 'object') {
																				if (typeof argument.filtering.interfaces.collapseElement.selector === 'string' && argument.filtering.interfaces.collapseElement.selector !== '') {
																					element = document.querySelector(argument.filtering.interfaces.collapseElement.selector);
																					if (element) {
																						interfaces.collapseElement.selector = argument.filtering.interfaces.collapseElement.selector;
																					}
																					else {
																						console.error(`${mainName}.${moduleName}.${functionName}`, arguments, `'argument.filtering.interfaces.collapseElement.selector' is bad '${argument.filtering.interfaces.collapseElement.selector}'`);
																						break;
																					}
																				}
																				else {
																					console.error(`${mainName}.${moduleName}.${functionName}`, arguments, `'argument.filtering.interfaces.collapseElement.selector' is bad '${argument.filtering.interfaces.collapseElement.selector}'`);
																					break;
																				}
																			}
																			else {
																				console.error(`${mainName}.${moduleName}.${functionName}`, arguments, `'argument.filtering.interfaces.collapseElement' is not object '${argument.filtering.interfaces.collapseElement}'`);
																				break;
																			}
																			if (typeof argument.filtering.interfaces.resetElement === 'object') {
																				if (typeof argument.filtering.interfaces.resetElement.selector === 'string' && argument.filtering.interfaces.resetElement.selector !== '') {
																					element = document.querySelector(argument.filtering.interfaces.resetElement.selector);
																					if (element) {
																						interfaces.resetElement.selector = argument.filtering.interfaces.resetElement.selector;
																					}
																					else {
																						console.error(`${mainName}.${moduleName}.${functionName}`, arguments, `'argument.filtering.interfaces.resetElement.selector' is bad '${argument.filtering.interfaces.resetElement.selector}'`);
																						break;
																					}
																				}
																				else {
																					console.error(`${mainName}.${moduleName}.${functionName}`, arguments, `'argument.filtering.interfaces.resetElement.selector' is bad '${argument.filtering.interfaces.resetElement.selector}'`);
																					break;
																				}
																			}
																			else {
																				console.error(`${mainName}.${moduleName}.${functionName}`, arguments, `'argument.filtering.interfaces.resetElement' is not object '${argument.filtering.interfaces.resetElement}'`);
																				break;
																			}
																			if (typeof argument.filtering.interfaces.propertiesContainerElement === 'object') {
																				if (typeof argument.filtering.interfaces.propertiesContainerElement.selector === 'string' && argument.filtering.interfaces.propertiesContainerElement.selector !== '') {
																					element = document.querySelector(argument.filtering.interfaces.propertiesContainerElement.selector);
																					if (element) {
																						interfaces.propertiesContainerElement.selector = argument.filtering.interfaces.propertiesContainerElement.selector;
																					}
																					else {
																						console.error(`${mainName}.${moduleName}.${functionName}`, arguments, `'argument.filtering.interfaces.propertiesContainerElement.selector' is bad '${argument.filtering.interfaces.propertiesContainerElement.selector}'`);
																						break;
																					}
																				}
																				else {
																					console.error(`${mainName}.${moduleName}.${functionName}`, arguments, `'argument.filtering.interfaces.propertiesContainerElement.selector' is bad '${argument.filtering.interfaces.propertiesContainerElement.selector}'`);
																					break;
																				}
																			}
																			else {
																				console.error(`${mainName}.${moduleName}.${functionName}`, arguments, `'argument.filtering.interfaces.propertiesContainerElement' is not object '${argument.filtering.interfaces.propertiesContainerElement}'`);
																				break;
																			}
																			if (typeof argument.filtering.interfaces.filteringMenuElement === 'object') {
																				if (typeof argument.filtering.interfaces.filteringMenuElement.selector === 'string' && argument.filtering.interfaces.filteringMenuElement.selector !== '') {
																					element = document.querySelector(argument.filtering.interfaces.filteringMenuElement.selector);
																					if (element) {
																						interfaces.filteringMenuElement.selector = argument.filtering.interfaces.filteringMenuElement.selector;
																					}
																					else {
																						console.error(`${mainName}.${moduleName}.${functionName}`, arguments, `'argument.filtering.interfaces.filteringMenuElement.selector' is bad '${argument.filtering.interfaces.filteringMenuElement.selector}'`);
																						break;
																					}
																				}
																				else {
																					console.error(`${mainName}.${moduleName}.${functionName}`, arguments, `'argument.filtering.interfaces.filteringMenuElement.selector' is bad '${argument.filtering.interfaces.filteringMenuElement.selector}'`);
																					break;
																				}
																			}
																			else {
																				console.error(`${mainName}.${moduleName}.${functionName}`, arguments, `'argument.filtering.interfaces.filteringMenuElement' is not object '${argument.filtering.interfaces.filteringMenuElement}'`);
																				break;
																			}
																			if (typeof argument.filtering.interfaces.blocksElement === 'object') {
																				if (typeof argument.filtering.interfaces.blocksElement.selector === 'string' && argument.filtering.interfaces.blocksElement.selector !== '') {
																					element = document.querySelector(argument.filtering.interfaces.blocksElement.selector);
																					if (element) {
																						interfaces.blocksElement.selector = argument.filtering.interfaces.blocksElement.selector;
																					}
																					else {
																						console.error(`${mainName}.${moduleName}.${functionName}`, arguments, `'argument.filtering.interfaces.blocksElement.selector' is bad '${argument.filtering.interfaces.blocksElement.selector}'`);
																						break;
																					}
																				}
																				else {
																					console.error(`${mainName}.${moduleName}.${functionName}`, arguments, `'argument.filtering.interfaces.blocksElement.selector' is bad '${argument.filtering.interfaces.blocksElement.selector}'`);
																					break;
																				}
																			}
																			else {
																				console.error(`${mainName}.${moduleName}.${functionName}`, arguments, `'argument.filtering.interfaces.blocksElement' is not object '${argument.filtering.interfaces.blocksElement}'`);
																				break;
																			}
																			if (typeof argument.filtering.interfaces.showMorePropertyValues === 'object') {
																				if (typeof argument.filtering.interfaces.showMorePropertyValues.text === 'string' && argument.filtering.interfaces.showMorePropertyValues.text !== '') {
																					interfaces.showMorePropertyValues.text = argument.filtering.interfaces.showMorePropertyValues.text;
																				}
																				else {
																					console.error(`${mainName}.${moduleName}.${functionName}`, arguments, `'argument.filtering.interfaces.showMorePropertyValues.selector' is bad '${argument.filtering.interfaces.showMorePropertyValues.selector}'`);
																					break;
																				}
																			}
																			else {
																				console.error(`${mainName}.${moduleName}.${functionName}`, arguments, `'argument.filtering.interfaces.showMorePropertyValues' is not object '${argument.filtering.interfaces.showMorePropertyValues}'`);
																				break;
																			}
																		}
																		else {
																			console.error(`${mainName}.${moduleName}.${functionName}`, arguments, `'argument.filtering.interfaces' is not object '${argument.filtering.interfaces}'`);
																		}
																		if (
																			interfaces.additionalSwitchElement.selector
																				&& interfaces.collapseElement.selector
																				&& interfaces.blocksElement.selector
																				&& interfaces.filteringMenuElement.selector
																				&& interfaces.propertiesContainerElement.selector
																				&& interfaces.resetElement.selector
																				&& interfaces.switchElement.selector
																				&& interfaces.showMorePropertyValues.text
																		) {
																			result.filtering.interfaces = argument.filtering.interfaces;
																			result.filtering.interfaceType = argument.filtering.interfaceType;
																			result.filtering.interfaceEnabled = true;
																		}
																		break;
																	}
																}
															}
														}
													}
												}
												else {
													console.error(`${mainName}.${moduleName}.${functionName}`, arguments, `'argument.filtering.data' is bad '${argument.filtering.data}'`);
												}
											}
										}
										else {
											console.error(`${mainName}.${moduleName}.${functionName}`, arguments, `'argument.filtering' is not object '${argument.filtering}'`);
										}

										return result;
									}
								}
								else {
									console.error(`${mainName}.${moduleName}.${functionName}`, arguments, `'argument.items' is bad '${argument.items}'`);
								}
							}
							else {
								console.error(`${mainName}.${moduleName}.${functionName}`, arguments, `'result.itemsInterfaceElement' not found '${argument.itemsInterfaceSelector}'`);
							}
						}
						else {
							console.error(`${mainName}.${moduleName}.${functionName}`, arguments, `'argument.itemsInterfaceSelector' is bad '${argument.itemsInterfaceSelector}'`);
						}
					}
					else {
						console.error(`${mainName}.${moduleName}.${functionName}`, arguments, `'argument.functionToShowCatalogue' is not 'function' '${argument.functionToShowCatalogue}' `);
					}
				}
				else {
					console.error(`${mainName}.${moduleName}.${functionName}`, arguments, `'argument' is not object '${argument}'`);
				}
				return false;
			};
		}());
		/* /////////////////////////////////////////////////////////////////////////////////////////// */

		/** @function addFunctionShow */
		(function addFunctionShow() {
			const functionName = 'show';

			/** @function show */
			F[functionName] = function show(argument) {
				// console.log(`${mainName}.${moduleName}.${functionName}`, arguments);

				if (typeof argument === 'object') {
					if (typeof argument.catalogueValue === 'object') {
						if (argument.showItemsInterface === true) {
							if (typeof argument.catalogueValue.functionToShowCatalogue === 'function') {
								argument.catalogueValue.functionToShowCatalogue(argument.catalogueValue, argument.reason);
							}
						}
						if (argument.processFilteringInterface) {
							F.processFilteringInterface({ 'catalogueValue': argument.catalogueValue, 'type': argument.processFilteringInterface, });
						}
						if (argument.showSortingInterface === true) {
							if (argument.catalogueValue.items.size > 1) {
								F.showSortingInterface(argument.catalogueValue);
							}
						}
					}
					else {
						console.error(`${mainName}.${moduleName}.${functionName}`, arguments, '\'argument.catalogueValue\' is not object');
					}
				}
				else {
					console.error(`${mainName}.${moduleName}.${functionName}`, arguments, '\'argument\' is not object');
				}
			};
		}());
		/* /////////////////////////////////////////////////////////////////////////////////////////// */

		/** @function addFunctionProcessFilteringInterface */
		(function addFunctionProcessFilteringInterface() {
			const functionName = 'processFilteringInterface';

			/** @function processFilteringInterface */
			F[functionName] = function processFilteringInterface(argument) {
				// console.log(`${mainName}.${moduleName}.${functionName}`, arguments);

				if (typeof argument === 'object') {
					if (typeof argument.catalogueValue === 'object') {
						const catalogueValue = argument.catalogueValue;

						if (typeof catalogueValue.filtering === 'object') {
							if (catalogueValue.filtering.enabled === true) {
								if (catalogueValue.filtering.interfaceEnabled === true) {
									switch (catalogueValue.filtering.interfaceType) {
										case 'products': {
											const additionalSwitchElement = document.querySelector(catalogueValue.filtering.interfaces.additionalSwitchElement.selector);
											const collapseElement = document.querySelector(catalogueValue.filtering.interfaces.collapseElement.selector);
											const blocksElement = document.querySelector(catalogueValue.filtering.interfaces.blocksElement.selector);
											const filteringMenuElement = document.querySelector(catalogueValue.filtering.interfaces.filteringMenuElement.selector);
											const propertiesContainerElement = document.querySelector(catalogueValue.filtering.interfaces.propertiesContainerElement.selector);
											const resetElement = document.querySelector(catalogueValue.filtering.interfaces.resetElement.selector);
											const switchElement = document.querySelector(catalogueValue.filtering.interfaces.switchElement.selector);

											if (blocksElement && filteringMenuElement) {
												filteringMenuElement.classList.add('enable');
												switch (argument.type) {
													case 'doAll':
														if (additionalSwitchElement) {
															window.addEventListener('scroll', () => {
																if (filteringMenuElement.offsetTop + filteringMenuElement.offsetHeight < window.scrollY) {
																	additionalSwitchElement.classList.add('visible');
																}
																else {
																	additionalSwitchElement.classList.remove('visible');
																}
															});
															window.addEventListener('resize', () => {
																if (filteringMenuElement.offsetTop + filteringMenuElement.offsetHeight < window.scrollY) {
																	additionalSwitchElement.classList.add('visible');
																}
																else {
																	additionalSwitchElement.classList.remove('visible');
																}
															});
															additionalSwitchElement.addEventListener('click', () => {
																filteringMenuElement.classList.add('open');
																filteringMenuElement.scrollIntoView();
																if (window.innerWidth < 1024) {
																	window.scrollBy(0, -64);
																}
															});
														}
														if (collapseElement) {
															collapseElement.addEventListener('click', () => {
																filteringMenuElement.classList.remove('open');
															});
														}
														if (resetElement) {
															resetElement.addEventListener('click', () => {
																catalogueValue.filtering.currentState.clear();
																F.filter(catalogueValue);
																if (catalogueValue.sorting.currentState) {
																	F.sort({
																		catalogueValue,
																		'sortingItemKey': catalogueValue.sorting.currentState,
																	});
																}
																filteringMenuElement.classList.remove('active');
																F.show({
																	catalogueValue,
																	'showItemsInterface': true,
																	'processFilteringInterface': 'reset',
																	'reason': 'filtering',
																});
															});
														}
														if (switchElement) {
															switchElement.classList.add('enable');
															switchElement.addEventListener('click', () => {
																filteringMenuElement.classList.add('open');
															});
														}
														blocksElement.classList.add('filtering');
														break;
												}
												if (propertiesContainerElement) {
													const propertiesElement = document.createElement('div');

													propertiesElement.classList.add('properties');

													catalogueValue.filtering.properties.forEach((propertyDataValue, propertyDataKey) => {
														// console.log('propertyDataValue', propertyDataValue, 'propertyDataKey', propertyDataKey);
														const propertyElement = document.createElement('div');
														const propertyNameElement = document.createElement('div');
														const propertyValuesElement = document.createElement('div');

														propertyNameElement.innerText = propertyDataValue.name;
														propertyElement.classList.add('property');
														propertyNameElement.classList.add('name');
														propertyValuesElement.classList.add('values');
														propertyDataValue.values.forEach((propertyValue) => {
															// console.log('propertyValue', propertyValue);
															const propertyValueElement = document.createElement('div');

															propertyValueElement.classList.add('value');
															if (catalogueValue.filtering.currentState.has(propertyDataKey)) {
																if (catalogueValue.filtering.currentState.get(propertyDataKey).has(propertyValue)) {
																	propertyValueElement.classList.add('set');
																}
															}
															propertyValueElement.addEventListener('click', (event) => {
																const element = event.currentTarget;

																element.classList.toggle('set');
																if (!catalogueValue.filtering.currentState.has(propertyDataKey)) {
																	catalogueValue.filtering.currentState.set(propertyDataKey, new Set([]));
																}
																const propertyValues = catalogueValue.filtering.currentState.get(propertyDataKey);
																if (!propertyValues.has(propertyValue)) {
																	propertyValues.add(propertyValue);
																}
																else {
																	propertyValues.delete(propertyValue);
																	if (propertyValues.size === 0) {
																		catalogueValue.filtering.currentState.delete(propertyDataKey);
																	}
																}
																// console.log('catalogueValue', catalogueValue);
																// console.log('catalogueValue.filtering.currentState', catalogueValue.filtering.currentState);
																// console.log('propertyDataKey', propertyDataKey);
																// console.log('propertyValues', propertyValues);
																if (catalogueValue.filtering.currentState.size > 0) {
																	filteringMenuElement.classList.add('active');
																}
																else {
																	filteringMenuElement.classList.remove('active');
																}
																F.filter(catalogueValue);
																if (catalogueValue.sorting.currentState) {
																	F.sort({
																		catalogueValue,
																		'sortingItemKey': catalogueValue.sorting.currentState,
																	});
																}
																F.show({
																	catalogueValue,
																	'showItemsInterface': true,
																	'reason': 'filtering',
																});
															});

															switch (propertyDataValue.type) {
																case 'number':
																case 'string':
																	propertyValueElement.innerText = propertyValue;
																	break;
																case 'fillOrEmptyString':
																	if (propertyValue === 0) {
																		propertyValueElement.innerText = propertyDataValue.valuesReplacement.empty;
																	}
																	else if (propertyValue === 1) {
																		propertyValueElement.innerText = propertyDataValue.valuesReplacement.fill;
																	}
																	break;
															}
															propertyValuesElement.appendChild(propertyValueElement);
														});
														propertyElement.appendChild(propertyNameElement);
														propertyElement.appendChild(propertyValuesElement);
														if (propertyDataValue.values.length > 5) {
															const
																showMorePropertyValuesElement = document.createElement('div');

															showMorePropertyValuesElement.classList.add('show-more-values');
															showMorePropertyValuesElement.innerText = catalogueValue.filtering.interfaces.showMorePropertyValues.text;
															propertyElement.classList.add('show-more-values');
															showMorePropertyValuesElement.addEventListener('click', () => {
																propertyElement.classList.remove('show-more-values');
															});
															propertyElement.appendChild(showMorePropertyValuesElement);
														}
														propertiesElement.appendChild(propertyElement);
													});
													propertiesContainerElement.innerHTML = '';
													propertiesContainerElement.appendChild(propertiesElement);
												}
											}
											break;
										}
									}
								}
							}
						}
						else {
							console.error(`${mainName}.${moduleName}.${functionName}`, arguments, `'catalogueValue.filtering' is not object '${catalogueValue.filtering}'`);
						}
					}
					else {
						console.error(`${mainName}.${moduleName}.${functionName}`, arguments, `'argument.catalogueValue' is not object '${argument.catalogueValue}'`);
					}
				}
				else {
					console.error(`${mainName}.${moduleName}.${functionName}`, arguments, `'argument' is not object '${arguments}'`);
				}
			};
		}());
		/* /////////////////////////////////////////////////////////////////////////////////////////// */

		/** @function showSortingInterface */
		(function addFunctionshowSortingInterface() {
			const functionName = 'showSortingInterface';

			/** @function showSortingInterface */
			F[functionName] = function showSortingInterface(catalogueValue) {
				// console.log(`${mainName}.${moduleName}.${functionName}`, arguments);
				let element;

				if (typeof catalogueValue === 'object') {
					if (typeof catalogueValue.sorting === 'object') {
						switch (catalogueValue.sorting.itemsInterfaceType) {
							case 'menu':
								if (catalogueValue.sorting.enabled === true) {
									element = document.createElement('div');
									element.classList.add('items');
									catalogueValue.sorting.items.forEach((sortingItemValue, sortingItemKey) => {
										const
											e = document.createElement('div');

										e.innerHTML = sortingItemValue.name;
										e.classList.add('item');
										if (catalogueValue.sorting.currentState === sortingItemKey) {
											e.classList.add('current');
											if (catalogueValue.sorting.switchInterfaceEnabled === true) {
												catalogueValue.sorting.switchInterfaceElement.innerHTML = sortingItemValue.name;
											}
										}
										e.addEventListener('click', () => {
											if (catalogueValue.sorting.currentState !== sortingItemKey) {
												catalogueValue.sorting.itemsInterfaceElement.parentElement.classList.remove('open');
												F.sort({ catalogueValue, sortingItemKey, });
												F.show({
													catalogueValue, 'showItemsInterface': true, 'showSortingInterface': true, 'reason': 'sorting',
												});
											}
											else {
												catalogueValue.sorting.itemsInterfaceElement.parentElement.classList.remove('open');
											}
										});
										element.appendChild(e);
										if (catalogueValue.sorting.switchInterfaceEnabled === true) {
											catalogueValue.sorting.switchInterfaceElement.classList.add('enable');
											catalogueValue.sorting.switchInterfaceElement.addEventListener('click', () => {
												catalogueValue.sorting.itemsInterfaceElement.parentElement.classList.add('open');
											});
										}
										catalogueValue.sorting.itemsInterfaceElement.innerHTML = '';
										catalogueValue.sorting.itemsInterfaceElement.appendChild(element);
										catalogueValue.sorting.itemsInterfaceElement.parentElement.classList.add('enable');
									});
								}
								break;
						}
					}
					else {
						console.error(`${mainName}.${moduleName}.${functionName}`, arguments, `'catalogueValue.sorting' is not object '${catalogueValue.sorting}'`);
					}
				}
				else {
					console.error(`${mainName}.${moduleName}.${functionName}`, arguments, `'catalogueValue' is not object '${catalogueValue}'`);
				}
			};
		}());
		/* /////////////////////////////////////////////////////////////////////////////////////////// */

		/** @function addFunctionSort */
		(function addFunctionSort() {
			const functionName = 'sort';

			/** @function sort */
			F[functionName] = function sort(argument) {
				// console.log(`${mainName}.${moduleName}.${functionName}`, arguments);
				let catalogueValue;
				let catalogueItemValue;
				let sortingItemKey;
				let sortingItemValue;
				const itemsWithProperty = [];
				const itemsWithoutProperty = [];
				let source;

				if (typeof argument === 'object') {
					if (typeof argument.catalogueValue === 'object') {
						catalogueValue = argument.catalogueValue;
						if (argument.sortingItemKey) {
							sortingItemKey = argument.sortingItemKey;
							if (catalogueValue.sorting.items.has(sortingItemKey)) {
								catalogueValue.sorting.currentState = sortingItemKey;
								sortingItemValue = catalogueValue.sorting.items.get(sortingItemKey);
								if (catalogueValue.itemsKeysForShow) {
									source = catalogueValue.itemsKeysForShow;
								}
								else {
									source = catalogueValue.items;
								}
								if (source.size > 1) {
									source.forEach(function separateItemByItsProperty(value, catalogueItemKey) {
										catalogueItemValue = catalogueValue.items.get(catalogueItemKey);
										if (typeof catalogueItemValue === 'object') {
											if (Object.prototype.hasOwnProperty.call(catalogueItemValue, sortingItemValue.property)) {
												switch (sortingItemValue.type) {
													case 'number':
														if (typeof catalogueItemValue[sortingItemValue.property] === 'number') {
															itemsWithProperty.push(catalogueItemKey);
														}
														else {
															itemsWithoutProperty.push(catalogueItemKey);
														}
														break;
													case 'string':
														if (typeof catalogueItemValue[sortingItemValue.property] === 'string') {
															itemsWithProperty.push(catalogueItemKey);
														}
														else {
															itemsWithoutProperty.push(catalogueItemKey);
														}
														break;
													case 'fillOrEmptyString':
														if (typeof catalogueItemValue[sortingItemValue.property] === 'string') {
															itemsWithProperty.push(catalogueItemKey);
														}
														else {
															itemsWithoutProperty.push(catalogueItemKey);
														}
														break;
													case 'boolean':
														if (typeof catalogueItemValue[sortingItemValue.property] === 'boolean') {
															itemsWithProperty.push(catalogueItemKey);
														}
														else {
															itemsWithoutProperty.push(catalogueItemKey);
														}
														break;
													default:
														itemsWithoutProperty.push(catalogueItemKey);
														break;
												}
											}
											else {
												itemsWithoutProperty.push(catalogueItemKey);
											}
										}
										else {
											console.error(`${mainName}.${moduleName}.${functionName}`, arguments, `'${catalogueItemKey}' 'catalogueItemValue' is not object '${catalogueItemValue}'`);
										}
									});
									// console.log('itemsWithProperty:', itemsWithProperty, 'itemsWithoutProperty:', itemsWithoutProperty);
									switch (sortingItemValue.type) {
										case 'number':
											switch (sortingItemValue.order) {
												case '10':
													itemsWithProperty.sort((aKey, bKey) => {
														const aKeyItem = catalogueValue.items.get(aKey);
														const bKeyItem = catalogueValue.items.get(bKey);

														return bKeyItem[sortingItemValue.property] - aKeyItem[sortingItemValue.property];
													});
													break;
												case '01':
													itemsWithProperty.sort((aKey, bKey) => {
														const aKeyItem = catalogueValue.items.get(aKey);
														const bKeyItem = catalogueValue.items.get(bKey);

														return aKeyItem[sortingItemValue.property] - bKeyItem[sortingItemValue.property];
													});
													break;
											}
											break;
										case 'string':
											switch (sortingItemValue.order) {
												case 'ab':
													itemsWithProperty.sort((aKey, bKey) => {
														const aKeyItem = catalogueValue.items.get(aKey);
														const bKeyItem = catalogueValue.items.get(bKey);

														return aKeyItem[sortingItemValue.property].localeCompare(bKeyItem[sortingItemValue.property]);
													});
													break;
												case 'ba':
													itemsWithProperty.sort((aKey, bKey) => {
														const aKeyItem = catalogueValue.items.get(aKey);
														const bKeyItem = catalogueValue.items.get(bKey);

														return bKeyItem[sortingItemValue.property].localeCompare(aKeyItem[sortingItemValue.property]);
													});
													break;
											}
											break;
										case 'fillOrEmptyString':
											switch (sortingItemValue.order) {
												case 'ef':
													itemsWithProperty.sort((aKey, bKey) => {
														const aKeyItem = catalogueValue.items.get(aKey);
														const bKeyItem = catalogueValue.items.get(bKey);

														return (aKeyItem[sortingItemValue.property] ? 1 : 0) - (bKeyItem[sortingItemValue.property] ? 1 : 0);
													});
													break;
												case 'fe':
													itemsWithProperty.sort((aKey, bKey) => {
														const aKeyItem = catalogueValue.items.get(aKey);
														const bKeyItem = catalogueValue.items.get(bKey);

														return (bKeyItem[sortingItemValue.property] ? 1 : 0) - (aKeyItem[sortingItemValue.property] ? 1 : 0);
													});
													break;
											}
											break;
									}
									// console.log('itemsWithProperty:', itemsWithProperty, 'itemsWithoutProperty:', itemsWithoutProperty);
									catalogueValue.itemsKeysForShow = new Set(itemsWithProperty.concat(itemsWithoutProperty));
								}
							}
							else {
								console.error(`${mainName}.${moduleName}.${functionName}`, arguments, `'catalogueValue.sorting.items' not has '${sortingItemKey}'`);
							}
						}
						else {
							console.error(`${mainName}.${moduleName}.${functionName}`, arguments, `'argument.sortingItemKey' is bad '${argument.sortingItemKey}'`);
						}
					}
					else {
						console.error(`${mainName}.${moduleName}.${functionName}`, arguments, `'argument.catalogueValue' is not object '${argument.catalogueValue}'`);
					}
				}
				else {
					console.error(`${mainName}.${moduleName}.${functionName}`, arguments, `'argument' is not object '${argument}'`);
				}
			};
		}());
		/* /////////////////////////////////////////////////////////////////////////////////////////// */

		/** @function addFunctionFilter */
		(function addFunctionFilter() {
			const functionName = 'filter';

			/** @function filter */
			F[functionName] = function filter(catalogueValue) {
				// console.log(`${mainName}.${moduleName}.${functionName}`, arguments);
				const catalogueItemsKeys = new Map([]);

				if (typeof catalogueValue === 'object') {
					if (typeof catalogueValue.filtering === 'object') {
						catalogueValue.items.forEach((catalogueItemValue, catalogueItemKey) => {
							catalogueItemsKeys.set(catalogueItemKey, 0);
						});
						// console.log(catalogueItemsKeys);
						catalogueValue.filtering.currentState.forEach((currentFilteringItemValue, currentFilteringItemKey) => {
							catalogueItemsKeys.forEach((catalogueItemsKeysItemValue, catalogueItemKey) => {
								if (currentFilteringItemValue.size > 0) {
									let itemForShow = 0;
									currentFilteringItemValue.forEach((propertyValue) => {
										const catalogueItemValue = catalogueValue.items.get(catalogueItemKey);
										const propertyDataValue = catalogueValue.filtering.properties.get(currentFilteringItemKey);
										const filteringItemValueProperty = propertyDataValue.property;
										const filteringItemValueType = propertyDataValue.type;

										switch (filteringItemValueType) {
											case 'number':
											case 'string':
												if (catalogueItemValue[filteringItemValueProperty] === propertyValue) {
													// catalogueItemsKeysItemValue = 1;
													itemForShow = 1;
												}
												break;
											case 'fillOrEmptyString':
												if (typeof catalogueItemValue[filteringItemValueProperty] === 'string') {
													if (catalogueItemValue[filteringItemValueProperty] !== '') {
														if (propertyValue === 1) {
															// catalogueItemsKeysItemValue = 1;
															itemForShow = 1;
														}
													}
													else if (propertyValue === 0) {
														// catalogueItemsKeysItemValue = 1;
														itemForShow = 1;
													}
												}
												break;
										}
										// console.log(catalogueItemKey, catalogueItemValue[filteringItemValueProperty], propertyValue, catalogueItemsKeysItemValue);
									});
									// if (catalogueItemsKeysItemValue === 0) {
									if (itemForShow === 0) {
										catalogueItemsKeys.delete(catalogueItemKey);
									}
								}
							});
						});
						catalogueValue.itemsKeysForShow = new Set(catalogueItemsKeys.keys());
						// console.log('catalogueValue.itemsKeysForShow', catalogueValue.itemsKeysForShow);
					}
					else {
						console.error(`${mainName}.${moduleName}.${functionName}`, arguments, `'catalogueValue.filtering' is not object '${catalogueValue.filtering}'`);
					}
				}
				else {
					console.error(`${mainName}.${moduleName}.${functionName}`, arguments, `'catalogueValue' is not object '${catalogueValue}'`);
				}
			};
		}());
		/* /////////////////////////////////////////////////////////////////////////////////////////// */

		Modules[moduleName] = module;
	}());
	/* /////////////////////////////////////////////////////////////////////////////////////////// */

	window.addEventListener('DOMContentLoaded', Modules.fillPage);
}());
