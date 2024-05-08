using Abp.Configuration.Startup;
using Abp.Localization.Dictionaries;
using Abp.Localization.Dictionaries.Xml;
using Abp.Reflection.Extensions;

namespace InnmindsApi.Localization
{
    public static class InnmindsApiLocalizationConfigurer
    {
        public static void Configure(ILocalizationConfiguration localizationConfiguration)
        {
            localizationConfiguration.Sources.Add(
                new DictionaryBasedLocalizationSource(InnmindsApiConsts.LocalizationSourceName,
                    new XmlEmbeddedFileLocalizationDictionaryProvider(
                        typeof(InnmindsApiLocalizationConfigurer).GetAssembly(),
                        "InnmindsApi.Localization.SourceFiles"
                    )
                )
            );
        }
    }
}
