<template>
    <div class="container mx-auto px-5 lg:w-1/2 mb-8">
        <h2 class="text-4xl text-center font-bold m-8">Chcete vědět více?</h2>
        <div id="accordion-collapse" data-accordion="collapse">
            <SectionsTabsTab :number="1" 
            :title="'Nezavazná poptávka'" 
            :text="'V případě zájmu o nezávaznou poptávku nás můžete kontaktovat telefonicky, popřípadě prostřednictvím poptávkového formuláře.'"
            />
            <SectionsTabsTab :number="2" 
            :title="'Návrh řešení a odhad ceny'" 
            :text="'Na základě veškerých informací, které jsme získali, Vám dodáme plnohodnotný návrh energetické optimalizace a to včetně náročnosti Vašeho domu.'"
            />
            <SectionsTabsTab :number="3" 
            :title="'Návštěva obchodního zástupce'" 
            :text="'Obchodní zástupce s Vámi probere Vaše představy. Následně prozkoumá místo instalace elektrárny. Navrhne Vám individuální řešení pro Vaši elektrárnu. Splní požadavky, které jsou důležité pro Vás a zároveň v souladu s legislativou pro získání dotace. Dotaci za Vás kompletně zdarma vyřídíme.'"
            />
            <SectionsTabsTab :number="4" 
            :title="'Vaše přesná cena'" 
            :text="'Po osobní návštěvě Vašeho domu budeme znát optimální rozmístění panelů a přesné parametry komponentů, které jsou nezbytné k instalaci elektrárny na Váš dům. Následně pro Vás připravíme přesnou cenovou nabídku.'"
            />
            <SectionsTabsTab :number="5" 
            :title="'Návrh smlouvy'" 
            :text="'V návrhu smlouvy naleznete přesný rozpočet Vaší elektrárny. Podpisem smlouvy začíná naše společná spolupráce. Na základě smlouvy vyhotovíme Vámi poptávanou zakázku s dotací a veškerým papírováním.'"
            />
            <SectionsTabsTab :number="6" 
            :title="'Vyřízení dotace'" 
            :text="'Na základě zpracované projektové dokumentace a energetického posudku vyřídíme státní dotaci na celý projekt.'"
            />
            <SectionsTabsTab :number="7" 
            :title="'Vyřízení dotace'" 
            :text="'Na základě zpracované projektové dokumentace a energetického posudku vyřídíme státní dotaci na celý projekt.'"
            />
            <SectionsTabsTab :number="8" 
            :title="'Montáž a testování'" 
            :text="'Celou montáž a připojení k síti zajistí naši certifikovaní pracovníci, kteří Vám zárověň předvedou veškerou manipulaci se systémem. Pokud si nebudete vědět rady, můžete nás kdykoliv kontaktovat.'"
            />
            <SectionsTabsTab :number="9" 
            :title="'Připojení k distrubuční síti'" 
            :text="'Revizní technik prověří zapojení celého systému elektrárny, následně Vám předá dokumenty pro připojení k distribuční síti. Dokumenty nám poté zašlete elektronickou formou prostřednictvím emailu.'"
            />
            <SectionsTabsTab :number="10" 
            :title="'Vyplacení dotace'" 
            :text="'Jakmile budete připojeni k distribuční síti, zašleme za Vás potřebné podklady na Státní fond životního prostředí. Po zpracování dokumentů na úřadě Vám bude dotace uhrazena převodem na Váš účet.'"
            />
        </div>
    </div>
</template>