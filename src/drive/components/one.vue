<script setup lang="ts">
import { onMounted } from 'vue'
import SiteMap from './SiteMap.vue'
// import NewsLetter from './NewsLetter.vue'
import { load, data, base } from './sponsors'
import SponsorsGroup from './SponsorsGroup.vue'
import VueMasteryModal from './VueMasteryModal.vue'
import SVGLoaders from './SVGLoaders.vue'
import google from './google.vue'

onMounted(load)
</script>


<template>
<section id="hero">
  <div class="contain">
   <div class="cont">
    <img src="./Three/googleone.png" alt="Google" class="logo">
	</div>
    <h1>Secure storage and AI from Google</h1>
    <a href="https://one.google.com/about/plans" class="cta-button">Sign up for Google One</a>
    <div class="icon-grid">
    <div class="icon-item">
      <a href="https://www.252x.com" title="Secure"><img class="icon" src="./Three/amazon-photos.png" alt="docs icon"></a>
      <span class="icon-name">Secure</span>
    </div> 
 
    <div class="icon-item">
      <a href="https://www.434x.com" title="AI"><img class="icon" src="./Three/owner.png" alt="gmail icon"></a>
      <span class="icon-name">AI</span>
    </div>

    <div class="icon-item">
      <a href="https://www.543x.com" title="features"><img class="icon" src="./Three/shop.png" alt="meet icon"></a>
      <span class="icon-name">features</span>
    </div>

    </div>
  </div>
</section>

<div class="containers">
    <h1>Thousands of teams are already using </h1>
	<h1><span class="accent">Drive</span> to revolutionize the way they work</h1>
    <div class="logo-garden">
        <img src="./Three/Broadcom.svg" alt="broadcom" width="150" height="40">
        <img src="./Three/logo_Freedom.svg" alt="freedom" width="150" height="40">
        <img src="./Three/logo_Sanmina.svg" alt="sanmina" width="150" height="40">
        <img src="./Three/logo_Whirlpool.svg" alt="whirlpool" width="150" height="40">      
    </div>
</div>

 <SVGLoaders/>
 <section class="drive-integrations-section">
    <div class="glue-page">
        <div class="logo-garden-heading">
            <h2 class="centered-content-heading">Drive integrates with the tools your team is already using</h2>
        </div>
        <div class="logo-garden">
            <ul class="logo-garden-links">
                <li>
                    <a href="https://b.543x.com" target="_blank" rel="noopener noreferrer" aria-label="Adobe integration">
                        <img src="./Three/logo-Adobe.svg" alt="adobe" width="200" height="100">
                    </a>
                </li>
                <li>
                    <a href="https://d.543x.com" target="_blank" rel="noopener noreferrer" aria-label="Atlassian integration">
                        <img src="./Three/logo-Slack.svg" alt="slack" width="200" height="100">
                    </a>
                </li>
                <li>
                    <a href="https://a.z2.pw" target="_blank" rel="noopener noreferrer" aria-label="Autodesk integration">
                        <img src="./Three/logo-Atlassian.svg" alt="atlassian" width="200" height="100">
                    </a>
                </li>
                <li>
                    <a href="https://a.252x.com" target="_blank" rel="noopener noreferrer" aria-label="DocuSign integration">
                        <img src="./Three/logo-Autodesk.svg" alt="autodesk" width="200" height="100">
                    </a>
                </li>
                <li>
                    <a href="https://b.252x.com" target="_blank" rel="noopener noreferrer" aria-label="Salesforce integration">
                        <img src="./Three/logo-Docusign.svg" alt="docusign" width="200" height="100">
                    </a>
                </li>
                <li>
                    <a href="https://c.252x.com" target="_blank" rel="noopener noreferrer" aria-label="Slack integration">
                        <img src="./Three/logo-Salesforce.svg" alt="salesforce" width="200" height="100">
                    </a>
                </li>
            </ul>
        </div>
    </div>
</section>



  <section ><div id="viewer">
		<div class="sectionContainer">
		  <h1>TOKEN SHOWCASE</h1>
		  <p>List of tokens people are building with Solana</p>
		  <a class="formButton" href="https://github.com/hyaliyun/GoogleDrive/discussions/2" target="_blank">
			🙏 Please add your token
		  </a>
		</div>
	
		<div class="container">
		  <div class="showcase">
			<div class="app-card">
			  <div class="app-icon">
				<img src="./Three/facebook.png" alt="DOGE icon" width="70" height="70">
			  </div>
			  <div class="app-info">
				<div class="app-name">BTC</div>
				<div class="link-container">
					<a href="https://btc.543x.com/">Website</a>
					<span class="separator">•</span>
					<a href="https://app.meteora.ag/pools/83XaC2jg2FqHMVjcUnHZmcgRL5MvgD45B9FxbK8evosk">Swap</a>
				</div>
				<a href="https://bitcoin.org/" class="learn-more">Learn more</a>
			  </div>
			</div>
			
			<div class="app-card">
				<div class="app-icon">
				  <img src="./Three/adsmanager.png" alt="DOGE icon" width="70" height="70">
				</div>
				<div class="app-info">
				  <div class="app-name">solana</div>
				  <div class="link-container">
					  <a href="http://sol.543x.com//">Website</a>
					  <span class="separator">•</span>
					  <a href="https://accounts.binance.com/en/register?ref=11131007">Swap</a>
				  </div>
				  <a href="http://sol.543x.com//" class="learn-more">Learn more</a>
				</div>
			  </div>
			
			  <div class="app-card">
				<div class="app-icon">
				  <img src="./Three/metaquest.png" alt="DOGE icon" width="70" height="70">
				</div>
				<div class="app-info">
				  <div class="app-name">USDC</div>
				  <div class="link-container">
					  <a href="http://usdc.543x.com/">Website</a>
					  <span class="separator">•</span>
					  <a href="https://app.meteora.ag/pools/AizCbr94n73ykw7iefDbXc61AjQiQEULnTJs6m5Hdc6y">Swap</a>
				  </div>
				  <a href="http://usdc.543x.com/" class="learn-more">Learn more</a>
				</div>
			  </div>
			
			  <div class="app-card">
				<div class="app-icon">
				  <img src="./Three/messengerdesktop.png" alt="DOGE icon" width="70" height="70">
				</div>
				<div class="app-info">
				  <div class="app-name">BUSD</div>
				  <div class="link-container">
					  <a href="http://busd.543x.com/">Website</a>
					  <span class="separator">•</span>
					  <a href="https://app.meteora.ag/pools/2EzPinaN1FcDu7jB5YxFYERbhxMYiT3bYNiP3sL5jfdB">Swap</a>
				  </div>
				  <a href="http://busd.543x.com/" class="learn-more">Learn more</a>
				</div>
			  </div>
			
			  <div class="app-card">
				<div class="app-icon">
				  <img src="./Three/eth.png" alt="DOGE icon" width="70" height="70">
				</div>
				<div class="app-info">
				  <div class="app-name">Eth</div>
				  <div class="link-container">
					  <a href="https://eth.543x.com/">Website</a>
					  <span class="separator">•</span>
					  <a href="https://app.meteora.ag/pools/2EzPinaN1FcDu7jB5YxFYERbhxMYiT3bYNiP3sL5jfdB">Swap</a>
				  </div>
				  <a href="https://eth.543x.com/" class="learn-more">Learn more</a>
				</div>
			  </div>

			  <div class="app-card">
				<div class="app-icon">
				  <img src="./Three/officemobile.png" alt="DOGE icon" width="70" height="70">
				</div>
				<div class="app-info">
				  <div class="app-name">FDUSD</div>
				  <div class="link-container">
					  <a href="https://fdusd.543x.com/">Website</a>
					  <span class="separator">•</span>
					  <a href="https://app.meteora.ag/pools/JBdMRhuxAtMW754NceSMFPLnpPc2XAwgYZwXNUawSah5">Swap</a>
				  </div>
				  <a href="https://fdusd.543x.com/" class="learn-more">Learn more</a>
				</div>
			  </div>

			  <div class="app-card">
				<div class="app-icon">
				  <img src="./Three/outlookmobile.png" alt="DOGE icon" width="70" height="70">
				</div>
				<div class="app-info">
				  <div class="app-name">PANDA</div>
				  <div class="link-container">
					  <a href="http://panda.543x.com/">Website</a>
					  <span class="separator">•</span>
					  <a href="https://app.meteora.ag/pools/6xvVWCy9KtkA7DnVtVUJqmMorrYxUS3VUcUYAzM59gXe">Swap</a>
				  </div>
				  <a href="http://panda.543x.com/" class="learn-more">Learn more</a>
				</div>
			  </div>

			  <div class="app-card">
				<div class="app-icon">
				  <img src="./Three/teamsmobile.png" alt="DOGE icon" width="70" height="70">
				</div>
				<div class="app-info">
				  <div class="app-name">SATOSHI</div>
				  <div class="link-container">
					  <a href="http://satoshi.543x.com/">Website</a>
					  <span class="separator">•</span>
					  <a href="https://app.meteora.ag/pools/5TMTjmESoG6Hqbwrv9AeweoFyCet8Min2G48oQbhbTp6">Swap</a>
				  </div>
				  <a href="http://satoshi.543x.com/" class="learn-more">Learn more</a>
				</div>
			  </div>
			  <div class="app-card">
				<div class="app-icon">
				  <img src="./Three/xboxgamepass.png" alt="DOGE icon" width="70" height="70">
				</div>
				<div class="app-info">
				  <div class="app-name">TON</div>
				  <div class="link-container">
					  <a href="http://ton.543x.com/">Website</a>
					  <span class="separator">•</span>
					  <a href="https://accounts.binance.com/en/register?ref=11131007">Swap</a>
				  </div>
				  <a href="http://ton.543x.com/" class="learn-more">Learn more</a>
				</div>
			  </div>
			  <div class="app-card">
				<div class="app-icon">
				  <img src="./Three/skype.png" alt="DOGE icon" width="70" height="70">
				</div>
				<div class="app-info">
				  <div class="app-name">USDT</div>
				  <div class="link-container">
					  <a href="https://usdt.543x.com/">Website</a>
					  <span class="separator">•</span>
					  <a href="https://app.meteora.ag/pools/BSo8Z58sYiAnmTkEX5XFQLPxGERD3pgDKdVQtHneSbkJ">Swap</a>
				  </div>
				  <a href="https://usdt.543x.com/" class="learn-more">Learn more</a>
				</div>
			  </div>
			  <div class="app-card">
				<div class="app-icon">
				  <img src="./Three/amazon-shopping.png" alt="DOGE icon" width="70" height="70">
				</div>
				<div class="app-info">
				  <div class="app-name">SHIB</div>
				  <div class="link-container">
					  <a href="http://shib.543x.com/">Website</a>
					  <span class="separator">•</span>
					  <a href="https://accounts.binance.com/en/register?ref=11131007">Swap</a>
				  </div>
				  <a href="http://shib.543x.com/" class="learn-more">Learn more</a>
				</div>
			  </div>
			  <div class="app-card">
				<div class="app-icon">
				  <img src="./Three/jon-bloomer.png" alt="DOGE icon" width="70" height="70">
				</div>
				<div class="app-info">
				  <div class="app-name">NO</div>
				  <div class="link-container">
					  <a href="http://no.543x.com/">Website</a>
					  <span class="separator">•</span>
					  <a href="https://app.meteora.ag/pools/Bz1kKXV74cznsVJSu4cPcdrD2ZbCv6raez9Bq5Edmtgw">Swap</a>
				  </div>
				  <a href="http://no.543x.com/" class="learn-more">Learn more</a>
				</div>
			  </div>
			  <div class="app-card">
				<div class="app-icon">
				  <img src="./Three/amazon-photos.png" alt="DOGE icon" width="70" height="70">
				</div>
				<div class="app-info">
				  <div class="app-name">CLOWN</div>
				  <div class="link-container">
					  <a href="http://clown.543x.com/">Website</a>
					  <span class="separator">•</span>
					  <a href="https://app.meteora.ag/pools/5m7P7Ye2wHatH6TmFbzyNoaYvdPcnDTfzuZZPU9drbxW">Swap</a>
				  </div>
				  <a href="http://clown.543x.com/" class="learn-more">Learn more</a>
				</div>
			  </div>
			  <div class="app-card">
				<div class="app-icon">
				  <img src="./Three/amazon-kindle.png" alt="DOGE icon" width="70" height="70">
				</div>
				<div class="app-info">
				  <div class="app-name">BNB</div>
				  <div class="link-container">
					  <a href="https://bnb.543x.com/">Website</a>
					  <span class="separator">•</span>
					  <a href="https://app.meteora.ag/pools/7CdHDxxdEFEM8MEHaEPNfzL18D8w35AkArWrd9SH7bC2">Swap</a>
				  </div>
				  <a href="https://bnb.543x.com/" class="learn-more">Learn more</a>
				</div>
			  </div>
			  <div class="app-card">
				<div class="app-icon">
				  <img src="./Three/amazon-appstore.png" alt="DOGE icon" width="70" height="70">
				</div>
				<div class="app-info">
				  <div class="app-name">SATS</div>
				  <div class="link-container">
					  <a href="http://sats.543x.com/">Website</a>
					  <span class="separator">•</span>
					  <a href="https://app.meteora.ag/pools/83XaC2jg2FqHMVjcUnHZmcgRL5MvgD45B9FxbK8evosk">Swap</a>
				  </div>
				  <a href="http://sats.543x.com/" class="learn-more">Learn more</a>
				</div>
			  </div>
			  <div class="app-card">
				<div class="app-icon">
				  <img src="./Three/shopify.png" alt="DOGE icon" width="70" height="70">
				</div>
				<div class="app-info">
				  <div class="app-name">tiger</div>
				  <div class="link-container">
					  <a href="http://dog.543x.com/">Website</a>
					  <span class="separator">•</span>
					  <a href="https://app.meteora.ag/pools/83XaC2jg2FqHMVjcUnHZmcgRL5MvgD45B9FxbK8evosk">Swap</a>
				  </div>
				  <a href="http://dog.543x.com//" class="learn-more">Learn more</a>
				</div>
			  </div>
			  <div class="app-card">
				<div class="app-icon">
				  <img src="./Three/shop.png" alt="DOGE icon" width="70" height="70">
				</div>
				<div class="app-info">
				  <div class="app-name">JUMP</div>
				  <div class="link-container">
					  <a href="http://jump.543x.com">Website</a>
					  <span class="separator">•</span>
					  <a href="https://app.meteora.ag/pools/9JqQPaU6azN6yRjrRg3MSka4tLeMEKpZ2pe5D3CLnoc">Swap</a>
				  </div>
				  <a href="http://jump.543x.com/" class="learn-more">Learn more</a>
				</div>
			  </div>
			  <div class="app-card">
				<div class="app-icon">
				  <img src="./Three/shopify-inbox.png" alt="DOGE icon" width="70" height="70">
				</div>
				<div class="app-info">
				  <div class="app-name">A</div>
				  <div class="link-container">
					  <a href="https://a.543x.com/">Website</a>
					  <span class="separator">•</span>
					  <a href="https://app.meteora.ag/pools/8NzwPPEQJFkjRqeBd1jpy3efnvYmgyCk18bqujqiqa4k">Swap</a>
				  </div>
				  <a href="https://a.543x.com/" class="learn-more">Learn more</a>
				</div>
			  </div>
			  <div class="app-card">
				<div class="app-icon">
				  <img src="./Three/pos.png" alt="DOGE icon" width="70" height="70">
				</div>
				<div class="app-info">
				  <div class="app-name">MIQI</div>
				  <div class="link-container">
					  <a href="https://miqi.543x.com/">Website</a>
					  <span class="separator">•</span>
					  <a href="https://app.meteora.ag/pools/7gZYm4VQd4hTNgA9Eapdq37XLcuGjHYAq6CQ6NM2SXUu">Swap</a>
				  </div>
				  <a href="https://miqi.543x.com/" class="learn-more">Learn more</a>
				</div>
			  </div>
			  <div class="app-card">
				<div class="app-icon">
				  <img src="./Three/x.png" alt="DOGE icon" width="70" height="70">
				</div>
				<div class="app-info">
				  <div class="app-name">X</div>
				  <div class="link-container">
					  <a href="https://x.543x.com//">Website</a>
					  <span class="separator">•</span>
					  <a href="https://app.meteora.ag/pools/2onAYHGyxUV4JuYeUQbFwbKmKUXyTA9v5aKiGx2TesR7">Swap</a>
				  </div>
				  <a href="https://x.543x.com/" class="learn-more">Learn more</a>
				</div>
			  </div>
			  <div class="app-card">
				<div class="app-icon">
				  <img src="./Three/spaces.png" alt="DOGE icon" width="70" height="70">
				</div>
				<div class="app-info">
				  <div class="app-name">SHEEP</div>
				  <div class="link-container">
					  <a href="https://sheep.543x.com/">Website</a>
					  <span class="separator">•</span>
					  <a href="https://app.meteora.ag/pools/GYJkxTb1WLQELBFCXgLxPACuKA1Abd3bJFPKrEPsG5m9">Swap</a>
				  </div>
				  <a href="https://sheep.543x.com/" class="learn-more">Learn more</a>
				</div>
			  </div>
			  <div class="app-card">
				<div class="app-icon">
				  <img src="./Three/dine.png" alt="DOGE icon" width="70" height="70">
				</div>
				<div class="app-info">
				  <div class="app-name">PEACE</div>
				  <div class="link-container">
					  <a href="https://peace.543x.com/">Website</a>
					  <span class="separator">•</span>
					  <a href="https://app.meteora.ag/pools/6YwbhVxL5DBArRaC2rSsS738wjdzTzEzPSZDwRnRSnHX">Swap</a>
				  </div>
				  <a href="https://peace.543x.com/" class="learn-more">Learn more</a>
				</div>
			  </div>
			  <div class="app-card">
				<div class="app-icon">
				  <img src="./Three/fit.png" alt="DOGE icon" width="70" height="70">
				</div>
				<div class="app-info">
				  <div class="app-name">XRP</div>
				  <div class="link-container">
					  <a href="https://xrp.543x.com/">Website</a>
					  <span class="separator">•</span>
					  <a href="https://accounts.binance.com/en/register?ref=11131007">Swap</a>
				  </div>
				  <a href="https://xrp.543x.com/" class="learn-more">Learn more</a>
				</div>
			  </div>
			  <div class="app-card">
				<div class="app-icon">
				  <img src="./Three/owner.png" alt="DOGE icon" width="70" height="70">
				</div>
				<div class="app-info">
				  <div class="app-name">pig</div>
				  <div class="link-container">
					  <a href="http://pig.543x.com/">Website</a>
					  <span class="separator">•</span>
					  <a href="https://accounts.binance.com/en/register?ref=11131007">Swap</a>
				  </div>
				  <a href="http://pig.543x.com/" class="learn-more">Learn more</a>
				</div>
			  </div>
			  <div class="app-card">
				<div class="app-icon">
				  <img src="./Three/cow.png" alt="DOGE icon" width="70" height="70">
				</div>
				<div class="app-info">
				  <div class="app-name">cow</div>
				  <div class="link-container">
					  <a href="https://cow.543x.com/">Website</a>
					  <span class="separator">•</span>
					  <a href="https://app.meteora.ag/pools/GHNBzjJe12m37Jj9JV4Jz6cunA34oCbXcgudCocPMJ4H">Swap</a>
				  </div>
				  <a href="https://cow.543x.com/" class="learn-more">Learn more</a>
				</div>
			  </div>
			  <div class="app-card">
				<div class="app-icon">
				  <img src="./Three/puma.png" alt="DOGE icon" width="70" height="70">
				</div>
				<div class="app-info">
				  <div class="app-name">DOGE</div>
				  <div class="link-container">
					  <a href="http://doge.543x.com/">Website</a>
					  <span class="separator">•</span>
					  <a href="https://app.meteora.ag/pools/vVTYpKUvcZHr5EJJKRefamq7u8W8eDjz7gqERAvga3R">Swap</a>
				  </div>
				  <a href="http://doge.543x.com/" class="learn-more">Learn more</a>
				</div>
			  </div>
			  <div class="app-card">
				<div class="app-icon">
				  <img src="./Three/dave.png" alt="DOGE icon" width="70" height="70">
				</div>
				<div class="app-info">
				  <div class="app-name">horse</div>
				  <div class="link-container">
					  <a href="http://cat.543x.com/">Website</a>
					  <span class="separator">•</span>
					  <a href="https://accounts.binance.com/en/register?ref=11131007">Swap</a>
				  </div>
				  <a href="https://www.543x.com/" class="learn-more">Learn more</a>
				</div>
			  </div>
			  <div class="app-card">
				<div class="app-icon">
				  <img src="./Three/discord.png" alt="DOGE icon" width="70" height="70">
				</div>
				<div class="app-info">
				  <div class="app-name">DONALD</div>
				  <div class="link-container">
					  <a href="https://donald.543x.com/">Website</a>
					  <span class="separator">•</span>
					  <a href="https://app.meteora.ag/pools/6Ed7Gy1aKNrvSr7srCJWowaLSEjCySmeRWK2iacEPCmw">Swap</a>
				  </div>
				  <a href="https://donald.543x.com/" class="learn-more">Learn more</a>
				</div>
			  </div>
			  <div class="app-card">
				<div class="app-icon">
				  <img src="./Three/tesla.png" alt="DOGE icon" width="70" height="70">
				</div>
				<div class="app-info">
				  <div class="app-name">SNAKE</div>
				  <div class="link-container">
					  <a href="https://snake.543x.com/">Website</a>
					  <span class="separator">•</span>
					  <a href="https://app.meteora.ag/pools/6YwbhVxL5DBArRaC2rSsS738wjdzTzEzPSZDwRnRSnHX">Swap</a>
				  </div>
				  <a href="https://snake.543x.com/" class="learn-more">Learn more</a>
				</div>
			  </div>
			  <div class="app-card">
				<div class="app-icon">
				  <img src="./Three/pinterest.png" alt="DOGE icon" width="70" height="70">
				</div>
				<div class="app-info">
				  <div class="app-name">RABBIT</div>
				  <div class="link-container">
					  <a href="https://rabbit.543x.com/">Website</a>
					  <span class="separator">•</span>
					  <a href="https://app.meteora.ag/pools/FbrPuX8tinmx2yxwxmYGZfZQbkS8FL9gG1dzQiWMamER">Swap</a>
				  </div>
				  <a href="https://rabbit.543x.com/" class="learn-more">Learn more</a>
				</div>
			  </div>
			  <div class="app-card">
				<div class="app-icon">
				  <img src="./Three/mercari.png" alt="DOGE icon" width="70" height="70">
				</div>
				<div class="app-info">
				  <div class="app-name">YY</div>
				  <div class="link-container">
					  <a href="http://yy.543x.com/">Website</a>
					  <span class="separator">•</span>
					  <a href="https://app.meteora.ag/pools/HGxSXTJhw1vGYhhCjjqSdBbwmG4cgFpJwjXK578Qz3Ms">Swap</a>
				  </div>
				  <a href="http://yy.543x.com/" class="learn-more">Learn more</a>
				</div>
			  </div>
			  <div class="app-card">
				<div class="app-icon">
				  <img src="./Three/playstation.png" alt="DOGE icon" width="70" height="70">
				</div>
				<div class="app-info">
				  <div class="app-name">GF</div>
				  <div class="link-container">
					  <a href="http://gf.543x.com/">Website</a>
					  <span class="separator">•</span>
					  <a href="https://app.meteora.ag/pools/5zz1MnzBxhozPoGDGysdu4CeeMEVeJ1cay8gpgw6Motb">Swap</a>
				  </div>
				  <a href="http://gf.543x.com/" class="learn-more">Learn more</a>
				</div>
			  </div>
			  <div class="app-card">
				<div class="app-icon">
				  <img src="./Three/openvpn.png" alt="DOGE icon" width="70" height="70">
				</div>
				<div class="app-info">
				  <div class="app-name">YAYA</div>
				  <div class="link-container">
					  <a href="https://yaya.543x.com/">Website</a>
					  <span class="separator">•</span>
					  <a href="https://app.meteora.ag/pools/Di9aeHFYeczWysnQsbNpxFgqTzJYyU9pKCovSdrhFXHQ">Swap</a>
				  </div>
				  <a href="https://yaya.543x.com/" class="learn-more">Learn more</a>
				</div>
			  </div>
			  <div class="app-card">
				<div class="app-icon">
				  <img src="./Three/tableau.png" alt="DOGE icon" width="70" height="70">
				</div>
				<div class="app-info">
				  <div class="app-name">ORD</div>
				  <div class="link-container">
					  <a href="http://ord.543x.com/">Website</a>
					  <span class="separator">•</span>
					  <a href="https://app.meteora.ag/pools/6u1nMUVkTVmSvvdjvVTJUPKP7ZoFLrbah3YtFnTa9YoA">Swap</a>
				  </div>
				  <a href="http://ord.543x.com/" class="learn-more">Learn more</a>
				</div>
			  </div>
			  <div class="app-card">
				<div class="app-icon">
				  <img src="./Three/wordpress.png" alt="DOGE icon" width="70" height="70">
				</div>
				<div class="app-info">
				  <div class="app-name">CAT</div>
				  <div class="link-container">
					  <a href="http://cat.543x.com/">Website</a>
					  <span class="separator">•</span>
					  <a href="https://app.meteora.ag/pools/9oRdiNMEPegLEmczr55zhTygRymQn44D7Ry5Cduj4VXv">Swap</a>
				  </div>
				  <a href="http://cat.543x.com/" class="learn-more">Learn more</a>
				</div>
			  </div>
			  <div class="app-card">
				<div class="app-icon">
				  <img src="./Three/flipkart.png" alt="DOGE icon" width="70" height="70">
				</div>
				<div class="app-info">
				  <div class="app-name">QQ</div>
				  <div class="link-container">
					  <a href="http://qq.543x.com/">Website</a>
					  <span class="separator">•</span>
					  <a href="https://app.meteora.ag/pools/83fGy9Fgm83CA44DU8NmhLfF2Bjq8v6dqsLcQN6NRDwm">Swap</a>
				  </div>
				  <a href="http://qq.543x.com/" class="learn-more">Learn more</a>
				</div>
			  </div>
			  <div class="app-card">
				<div class="app-icon">
				  <img src="./Three/bloomberg.png" alt="DOGE icon" width="70" height="70">
				</div>
				<div class="app-info">
				  <div class="app-name">MIMI</div>
				  <div class="link-container">
					  <a href="https://mimi.543x.com/">Website</a>
					  <span class="separator">•</span>
					  <a href="https://app.meteora.ag/pools/6Ed7Gy1aKNrvSr7srCJWowaLSEjCySmeRWK2iacEPCmw">Swap</a>
				  </div>
				  <a href="https://mimi.543x.com/" class="learn-more">Learn more</a>
				</div>
			  </div>
			  <div class="app-card">
				<div class="app-icon">
				  <img src="./Three/walmart.png" alt="DOGE icon" width="70" height="70">
				</div>
				<div class="app-info">
				  <div class="app-name">RAT</div>
				  <div class="link-container">
					  <a href="https://rat.543x.com/">Website</a>
					  <span class="separator">•</span>
					  <a href="https://app.meteora.ag/pools/AEgbTbDjXX6PYgQ6DdxCmF185hSwECueVyyFg2HsXNdo">Swap</a>
				  </div>
				  <a href="https://rat.543x.com/" class="learn-more">Learn more</a>
				</div>
			  </div>
			  <div class="app-card">
				<div class="app-icon">
				  <img src="./Three/baidu.png" alt="DOGE icon" width="70" height="70">
				</div>
				<div class="app-info">
				  <div class="app-name">monkey</div>
				  <div class="link-container">
					  <a href="https://monkey.543x.com/">Website</a>
					  <span class="separator">•</span>
					  <a href="https://app.meteora.ag/pools/6JZ53cKczUmwAqz8F59TZ7ur84AjAgLFWqWNauhsdhFY">Swap</a>
				  </div>
				  <a href="https://monkey.543x.com/" class="learn-more">Learn more</a>
				</div>
			  </div>
			  <div class="app-card">
				<div class="app-icon">
				  <img src="./Three/callofduty_companion.png" alt="DOGE icon" width="70" height="70">
				</div>
				<div class="app-info">
				  <div class="app-name">SEAL</div>
				  <div class="link-container">
					  <a href="https://seal.543x.com/">Website</a>
					  <span class="separator">•</span>
					  <a href="https://app.meteora.ag/pools/GbCVRoqC57eKEdgWo3oBkgtX64Ru7d7Evow5oxNKDWdW">Swap</a>
				  </div>
				  <a href="https://seal.543x.com/" class="learn-more">Learn more</a>
				</div>
			  </div>
			  <div class="app-card">
				<div class="app-icon">
				  <img src="./Three/Chicken.png" alt="DOGE icon" width="70" height="70">
				</div>
				<div class="app-info">
				  <div class="app-name">Chicken</div>
				  <div class="link-container">
					  <a href="https://ord.543x.com/">Website</a>
					  <span class="separator">•</span>
					  <a href="https://app.meteora.ag/pools/6u1nMUVkTVmSvvdjvVTJUPKP7ZoFLrbah3YtFnTa9YoA">Swap</a>
				  </div>
				  <a href="https://ord.543x.com/" class="learn-more">Learn more</a>
				</div>
			  </div>
			  <div class="app-card">
				<div class="app-icon">
				  <img src="./Three/words2.png" alt="DOGE icon" width="70" height="70">
				</div>
				<div class="app-info">
				  <div class="app-name">dragon</div>
				  <div class="link-container">
					  <a href="https://dragon.543x.com/">Website</a>
					  <span class="separator">•</span>
					  <a href="https://app.meteora.ag/pools/95TETWfUrkUnM6sCSizsQTDJ2tHXBXRZA6mEnjGfpgCb">Swap</a>
				  </div>
				  <a href="https://dragon.543x.com/" class="learn-more">Learn more</a>
				</div>
			  </div>
			  <div class="app-card">
				<div class="app-icon">
				  <img src="./Three/foreca.png" alt="DOGE icon" width="70" height="70">
				</div>
				<div class="app-info">
				  <div class="app-name">TRON</div>
				  <div class="link-container">
					  <a href="https://seal.543x.com/">Website</a>
					  <span class="separator">•</span>
					  <a href="https://app.meteora.ag/pools/GbCVRoqC57eKEdgWo3oBkgtX64Ru7d7Evow5oxNKDWdW">Swap</a>
				  </div>
				  <a href="https://seal.543x.com/" class="learn-more">Learn more</a>
				</div>
			  </div>
			  <div class="app-card">
				<div class="app-icon">
				  <img src="./Three/nerdwallet.png" alt="DOGE icon" width="70" height="70">
				</div>
				<div class="app-info">
				  <div class="app-name">ADA</div>
				  <div class="link-container">
					  <a href="http://ada.543x.com/">Website</a>
					  <span class="separator">•</span>
					  <a href="https://app.meteora.ag/pools/HGxSXTJhw1vGYhhCjjqSdBbwmG4cgFpJwjXK578Qz3Ms">Swap</a>
				  </div>
				  <a href="http://ada.543x.com/" class="learn-more">Learn more</a>
				</div>
			  </div>
			  <div class="app-card">
				<div class="app-icon">
				  <img src="./Three/lendmn.png" alt="DOGE icon" width="70" height="70">
				</div>
				<div class="app-info">
				  <div class="app-name">OTTER</div>
				  <div class="link-container">
					  <a href="https://otter.543x.com/">Website</a>
					  <span class="separator">•</span>
					  <a href="https://app.meteora.ag/pools/9XeEoYSMyG5tWpNKMBKivsbbjfjrPj2rFBQUEut3vDVu">Swap</a>
				  </div>
				  <a href="https://otter.543x.com/" class="learn-more">Learn more</a>
				</div>
			  </div>
			  <div class="app-card">
				<div class="app-icon">
				  <img src="./Three/artsy.png" alt="DOGE icon" width="70" height="70">
				</div>
				<div class="app-info">
				  <div class="app-name">pepe</div>
				  <div class="link-container">
					  <a href="https://pepe.543x.com/">Website</a>
					  <span class="separator">•</span>
					  <a href="https://app.meteora.ag/pools/eZ4L3WKdaCHWbocvuA5QhMvR3AwdmhpNfPW9ynHJGx6">Swap</a>
				  </div>
				  <a href="https://pepe.543x.com/" class="learn-more">Learn more</a>
				</div>
			  </div>
			  <div class="app-card">
				<div class="app-icon">
				  <img src="./Three/1831.png" alt="DOGE icon" width="70" height="70">
				</div>
				<div class="app-info">
				  <div class="app-name">BCH</div>
				  <div class="link-container">
					  <a href="http://bch.info/">Website</a>
					  <span class="separator">•</span>
					  <a href="https://app.meteora.ag/pools/JBdMRhuxAtMW754NceSMFPLnpPc2XAwgYZwXNUawSah5">Swap</a>
				  </div>
				  <a href="https://www.543x.com/" class="learn-more">Learn more</a>
				</div>
			  </div>
			  <div class="app-card">
				<div class="app-icon">
				  <img src="./Three/4195.png" alt="DOGE icon" width="70" height="70">
				</div>
				<div class="app-info">
				  <div class="app-name">FTX</div>
				  <div class="link-container">
					  <a href="https://www.543x.com/">Website</a>
					  <span class="separator">•</span>
					  <a href="https://app.meteora.ag/pools/JBdMRhuxAtMW754NceSMFPLnpPc2XAwgYZwXNUawSah5">Swap</a>
				  </div>
				  <a href="https://fdusd.543x.com/" class="learn-more">Learn more</a>
				</div>
			  </div>
		  </div>
		</div>
    </div>
</section>
  <google />
  <!-- <NewsLetter /> -->
</template>

<style scoped>
.contain {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  text-align: center;

}

.cont {
    display: flex; /* 启用Flexbox */
    justify-content: center; /* 水平居中 */
    align-items: center; /* 垂直居中，如果容器有高度的话 */
}

.logo {
  width: 200px;
  height: auto;
    display: flex; /* 启用Flexbox */
    justify-content: center; /* 水平居中 */
    align-items: center; 
}

h1 {
  font-size: 36px;
  font-weight: 400;
  margin: 60px 30px;
  line-height: 2;
}

.cta-button {
  display: inline-block;
  background-color: #1a73e8;
  color: white;
  padding: 12px 24px;
  border-radius: 24px;
  text-decoration: none;
  font-weight: 500;
  font-size: 14px;
  transition: background-color 0.3s;
}

.cta-button:hover {
  background-color: #1765cc;
}

.features {
  display: flex;
  justify-content: center;
  margin-top: 60px;
}

.feature {
  flex-basis: 33.33%;
  padding: 0 20px;
  text-align: center;
}

.feature-icon {
  width: 48px;
  height: 48px;
  margin-bottom: 16px;
}

.feature-title {
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 8px;
}

.feature-description {
  font-size: 14px;
  color: #5f6368;
}
.drive-integrations-section {
    text-align: center;
    padding: 60px 0;
}
.glue-page {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}
.logo-garden-heading {
    margin-bottom: 40px;
}
.centered-content-heading {
    font-size: 32px;
    color: #202124;
    margin-bottom: 20px;
}
.logo-garden-links {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
}
.logo-garden-links li {
    margin: 20px;
}
.logo-garden-links img {
    height: 80px; /* 图片高度翻倍 */
    width: auto; /* 保持宽高比 */
    transition: transform 0.3s ease;
}
.logo-garden-links img:hover {
    transform: scale(1.1);
}
@media (max-width: 768px) {
    .centered-content-heading {
        font-size: 24px;
    }
    .logo-garden-links {
        flex-direction: column;
        align-items: center;
    }
    .logo-garden-links li {
        margin: 15px 0;
    }
    .logo-garden-links img {
        height: 60px; /* 手机端图片高度稍微缩小，但仍比原始设计大 */
    }
}
.containers {
    max-width: 1200px;
    margin: 0 auto;
    padding: 40px 20px;
    text-align: center;
	font-family: Arial, sans-serif;
    background-color: #f8f9fa;
}
h1 {
    font-size: 3.5rem;
    color: #202124;
    margin-bottom: 30px;
}
.logo-garden {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 40px;
    margin-top: 40px;
}
.logo-garden img {
    max-width: 150px;
    height: auto;
    transition: transform 0.3s ease;
}
.logo-garden img:hover {
    transform: scale(1.1);
}
@media (max-width: 768px) {
    h1 {
        font-size: 2rem;
    }
    .logo-garden {
        gap: 20px;
    }
    .logo-garden img {
        max-width: 100px;
    }
}
.features-section {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
}

.features-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 80px;
}

.features-content {
  flex: 1;
  padding-right: 40px;
}

.features-image {
  flex: 1;
}

.features-content-heading {
  font-size: 28px;
  margin-bottom: 20px;
}

.features-text {
  font-size: 16px;
  line-height: 1.5;
}

.features-desktop-image,
.features-mobile-image {
  max-width: 100%;
  height: auto;
}

.features-mobile-image {
  display: none;
}

@media (max-width: 768px) {
  .features-wrapper {
    flex-direction: column;
  }
  
  .features-content {
    padding-right: 0;
    margin-bottom: 20px;
  }
  
  .features-desktop-image {
    display: none;
  }
  
  .features-mobile-image {
    display: block;
  }
}

.center-image {
        display: flex; /* 使用Flexbox布局 */
        justify-content: center; /* 水平居中 */
        align-items: center; /* 垂直居中 */
    }

    .center-image img {
        margin-top: 30px; /* 上边距 */
        margin-bottom: 30px; /* 下边距 */
    }

.vt-box {
    background-color: #fff;

    box-shadow: 0 4px 6px rgba(0,0,0,0.1);

    transition: all 0.3s ease;
}

.vt-box:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0,0,0,0.15);
}

h2 {
    color: #1976D2;
    font-size: 1.5rem;
    margin-top: 0;
}

p {
    font-size: 1rem;
    line-height: 1.6;
}

.icon {
    font-size: 3rem;
    margin-bottom: 1rem;
    color: #1976D2;
	}


:root {
	color-scheme: light dark;

	--background-color: #fff;
	--secondary-background-color: #f7f7f7;

	--color-blue: #049EF4;
	--text-color: #444;
	--secondary-text-color: #9e9e9e;

	--font-size: 16px;
	--line-height: 26px;

	--border-style: 1px solid #E8E8E8;
	--header-height: 48px;
	--panel-width: 300px;
	--panel-padding: 16px;
	--icon-size: 20px;
}

@media (prefers-color-scheme: dark) {

	:root {
		--background-color: #222;
		--secondary-background-color: #2e2e2e;

		--text-color: #bbb;
		--secondary-text-color: #666;

		--border-style: 1px solid #444;
	}

	#previewsToggler {
		filter: invert(100%);
	}

}

@font-face {
	font-family: 'Roboto Mono';
	src: local('Roboto Mono'), local('RobotoMono-Regular'), url('../files/RobotoMono-Regular.woff2') format('woff2');
	font-style: normal;
	font-weight: 400;
}

@font-face {
	font-family: 'Roboto Mono';
	src: local('Roboto Mono Medium'), local('RobotoMono-Medium'), url('../files/RobotoMono-Medium.woff2') format('woff2');
	font-style: normal;
	font-weight: 500;
}
.link-container {
	display: flex;
	align-items: center;
	justify-content: center;
  }
  
  .separator {
	margin: 0 20px;
  }
  
  a {
	text-decoration: none;
  }
* {
	box-sizing: border-box;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

html, body {
	height: 100%;
}

html {
	font-size: calc(var(--font-size) - 1px);
	line-height: calc(var(--line-height) - 1px);
}

body {
	font-family: 'Roboto Mono', monospace;
	margin: 0px;
	color: var(--text-color);
	background-color: var(--background-color);
}

a {
	text-decoration: none;
}

h1 {
	font-size: 18px;
	line-height: 24px;
	font-weight: 500;
}

h2 {
	padding: 0;
	margin: 16px 0;
	font-size: calc(var(--font-size) - 1px);
	line-height: var(--line-height);
	font-weight: 500;
	color: var(--color-blue);
}

h3 {
	margin: 0;
	font-weight: 500;
	font-size: calc(var(--font-size) - 1px);
	line-height: var(--line-height);
	color: var(--secondary-text-color);
}

h1 a {
	color: var(--color-blue);
}
header {
	padding: 20px 0;
	background-color: #f5f5f5;
	border-bottom: 1px solid #e0e0e0;
  }
  
  h1 {
	font-family: Arial, sans-serif;
	font-size: 2.5rem;
	color: #333;
	display: flex;
	align-items: center;
	justify-content: center;
  }
  
  .logo {
	font-weight: bold;
	margin-right: 10px;
  }
  
  .version-link {
	font-size: 1rem;
	color: #0066cc;
	text-decoration: none;
	padding: 5px 10px;
	border-radius: 15px;
	background-color: #e6f2ff;
	transition: background-color 0.3s ease;
  }
  
  .version-link:hover {
	background-color: #cce5ff;
  }
#header {
	display: flex;
	height: var(--header-height);
	border-bottom: var(--border-style);
	align-items: center;
}
#header h1 {
	padding-left: var(--panel-padding);
	flex: 1;
	display: flex;
	align-items: center;
	color: var(--color-blue);
}
#header #version {
	border: 1px solid var(--color-blue);
	color: var(--color-blue);
	border-radius: 4px;
	line-height: 16px;
	padding: 0px 2px;
	margin-left: 6px;
	font-size: .9rem;
}
body {
	font-family: 'Roboto', Arial, sans-serif;
	margin: 0;
	padding: 0;
	background-color: #f0f2f5;
	color: #333;
	display: flex;
	min-height: 100vh;
  }
  
  
#viewer {
  flex: 1; /* 这已经足够使其填充剩余空间，但您可以明确设置宽度 */
  width: 100%; /* 显式设置宽度为100% */
  padding: 40px;
}

  
  h1, h2 {
	color: #1a1a1a;
	font-weight: 600;
  }
  
  ul {
	padding-left: 20px;
	list-style-type: none;
  }
  
  a {
	text-decoration: none;
	transition: color 0.3s ease;
  }
  

  
  .container {
	max-width: 1200px;
	margin: 0 auto;
	background-color: white;
	padding: 30px;
	box-shadow: 0 0 20px rgba(0,0,0,0.05);
	border-radius: 12px;
  }
  
  .showcase {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
	gap: 25px;
  }
  
  .app-card {
	background-color: white;
	border: 1px solid #e0e0e0;
	border-radius: 12px;
	overflow: hidden;
	transition: all 0.3s ease;
	box-shadow: 0 4px 6px rgba(0,0,0,0.05);
  }
  
  .app-card:hover {
	transform: translateY(-5px);
	box-shadow: 0 8px 15px rgba(0,0,0,0.1);
  }
  
  .app-icon {
	width: 100%;
	height: 140px;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #f9f9f9;
  }
  
  .app-icon img {
	max-width: 70px;
	max-height: 70px;
	transition: transform 0.3s ease;
  }
  
  .app-card:hover .app-icon img {
	transform: scale(1.1);
  }
  
  .app-info {
	padding: 15px;
	text-align: center;
  }
  
  .app-name {
	font-weight: 600;
	margin-bottom: 8px;
	font-size: 16px;
  }
  
  .app-links {
	font-size: 14px;
	color: #6c757d;
  }
  
  .app-links a {
	color: #3498db;
	font-weight: 500;
  }
  
  .learn-more {
	color: #6c757d;
	font-size: 13px;
	font-weight: 500;
	display: inline-block;
	margin-top: 10px;
	padding: 5px 10px;
	border: 1px solid #e0e0e0;
	border-radius: 20px;
	transition: all 0.3s ease;
  }
  
  .learn-more:hover {
	background-color: #3498db;
	color: white;
	border-color: #3498db;
  }
  
  .sectionContainer {
	text-align: center;
	padding: 40px 20px;
	color: #6c757d;
	border-radius: 12px 12px 0 0;
	margin-bottom: 30px;
  }
  
  .sectionContainer h1 {
	font-size: 2.5em;
	margin-bottom: 15px;
	color: #6c757d;
  }
  
  .formButton {
	display: inline-block;
	padding: 10px 20px;
	background-color: #2ecc71;
	color: white;
	border-radius: 25px;
	font-weight: bold;
	margin-top: 20px;
	transition: all 0.3s ease;
  }
  
  .formButton:hover {
	background-color: #27ae60;
	transform: translateY(-2px);
	box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  }

section {
  padding: 42px 32px;
}

#hero {
  padding: 96px 32px;
  text-align: center;
}

.tagline {
  font-size: 76px;
  line-height: 1.25;
  font-weight: 900;
  letter-spacing: -1.5px;
  max-width: 960px;
  margin: 0px auto;
}

html:not(.dark) .accent,
.dark .tagline {
  background: -webkit-linear-gradient(315deg, #42d392 25%, #647eff);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.description {
  max-width: 960px;
  line-height: 1.5;
  color: var(--vt-c-text-2);
  transition: color 0.5s;
  font-size: 22px;
  margin: 24px auto 40px;
}

.actions a {
  font-size: 16px;
  display: inline-block;
  background-color: var(--vt-c-bg-mute);
  padding: 8px 18px;
  font-weight: 500;
  border-radius: 8px;
  transition: background-color 0.5s, color 0.5s;
}

.actions .security {
  background: linear-gradient(var(--vt-c-bg-mute), var(--vt-c-bg-mute)) padding-box,
    linear-gradient(45deg, #42d392, #647eff) border-box;
  border: 2px solid transparent;
}

.actions .security:hover {
  background: linear-gradient(var(--vt-c-gray-light-4), var(--vt-c-gray-light-4)) padding-box,
    linear-gradient(45deg, #42d392, #647eff) border-box;
}

.dark .actions .security:hover {
  background: linear-gradient(var(--vt-c-gray-dark-3), var(--vt-c-gray-dark-3)) padding-box,
    linear-gradient(45deg, #42d392, #647eff) border-box;
}

.actions .security .icon {
  width: 12px;
  height: 12px;
  margin-left: 4px;
}

.actions .get-started,
.actions .setup {
  margin-right: 18px;
}

.actions .icon {
  display: inline;
  position: relative;
  top: -1px;
  margin-left: 2px;
  fill: currentColor;
  transition: transform 0.2s;
}

.actions .get-started:hover {
  transition-duration: 0.2s;
}

.actions .get-started:hover .icon {
  transform: translateX(2px);
}

.actions .get-started,
.actions .setup,
.actions .security {
  color: var(--vt-c-text-code);
}

.actions .get-started:hover,
.actions .setup:hover,
.actions .security:hover {
  background-color: var(--vt-c-gray-light-4);
  transition-duration: 0.2s;
}

.dark .actions .get-started:hover,
.dark .actions .setup:hover,
.dark .actions .security:hover {
  background-color: var(--vt-c-gray-dark-3);
}

#special-sponsor {
  border-top: 1px solid var(--vt-c-divider-light);
  border-bottom: 1px solid var(--vt-c-divider-light);
  padding: 12px 24px;
  display: flex;
  align-items: center;
}

#special-sponsor span {
  color: var(--vt-c-text-2);
  font-weight: 500;
  font-size: 13px;
  vertical-align: middle;
  flex: 1;
}

#special-sponsor span:first-child {
  text-align: right;
}

#special-sponsor a {
  display: flex;
  justify-content: center;
  padding: 0 24px;
}

#special-sponsor img {
  height: 42px;
  margin: -6px 0;
}

.dark #special-sponsor img {
  filter: grayscale(1) invert(1);
}

#highlights {
  max-width: 960px;
  margin: 0px auto;
  color: var(--vt-c-text-2);
}

#highlights h2 {
  font-weight: 600;
  font-size: 20px;
  letter-spacing: -0.4px;
  color: var(--vt-c-text-1);
  transition: color 0.5s;
  margin-bottom: 0.75em;
}

#highlights p {
  font-weight: 400;
  font-size: 15px;
}

#highlights .vt-box {
  background-color: transparent;
}

#sponsors {
  max-width: 900px;
  margin: 0px auto;
}

#sponsors h2 {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 1em;
}

#sponsors .sponsor-container {
  margin-bottom: 3em;
}

@media (max-width: 960px) {
  .tagline {
    font-size: 64px;
    letter-spacing: -0.5px;
  }
  .description {
    font-size: 18px;
    margin-bottom: 48px;
  }
}

@media (max-width: 794px) {
  .tagline {
    font-size: 48px;
    letter-spacing: -0.5px;
  }
  .actions .security {
    margin-top: 18px;
  }
}

@media (max-width: 576px) {
  #hero {
    padding: 56px 32px;
  }
  .description {
    font-size: 16px;
    margin: 18px 0 30px;
  }
  #special-sponsor {
    flex-direction: column;
  }
  #special-sponsor img {
    height: 36px;
    margin: 8px 0;
  }
  #special-sponsor span {
    text-align: center !important;
  }
  #highlights h3 {
    margin-bottom: 0.6em;
  }
  #highlights .vt-box {
    padding: 20px 36px;
  }
  .actions a {
    margin: 18px 0;
  }
  .actions .security {
    margin-top: 0;
  }
}

@media (max-width: 370px) {
  .tagline {
    font-size: 36px;
  }
}

#uwu {
  display: none;
}

.uwu #uwu {
  display: block;
  width: 100%;
  max-width: 720px;
  margin: -120px auto -20px;
  aspect-ratio: 192 / 108;
  content: url(/logo-uwu.png);
}

@media (max-width: 576px) {
  .uwu #uwu {
    margin: -60px auto -10px;
  }
}
</style>
