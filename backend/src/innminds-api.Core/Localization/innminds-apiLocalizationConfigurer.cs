using Abp.Configuration.Startup;
using Abp.Localization.Dictionaries;
using Abp.Localization.Dictionaries.Xml;
using Abp.Reflection.Extensions;

namespace innminds-api.Localization
{
    public static class innminds-apiLocalizationConfigurer
    {
        public static void Configure(ILocalizationConfiguration localizationConfiguration)
        {
            localizationConfiguration.Sources.Add(
                new DictionaryBasedLocalizationSource(innminds-apiConsts.LocalizationSourceName,
                    new XmlEmbeddedFileLocalizationDictionaryProvider(
                        typeof(innminds-apiLocalizationConfigurer).GetAssembly(),
                        "innminds-api.Localization.SourceFiles"
                    )
                )
            );
        }
    }
}
