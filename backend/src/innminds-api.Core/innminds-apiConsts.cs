using innminds-api.Debugging;

namespace innminds-api
{
    public class innminds-apiConsts
    {
        public const string LocalizationSourceName = "innminds-api";

        public const string ConnectionStringName = "Default";

        public const bool MultiTenancyEnabled = true;


        /// <summary>
        /// Default pass phrase for SimpleStringCipher decrypt/encrypt operations
        /// </summary>
        public static readonly string DefaultPassPhrase =
            DebugHelper.IsDebug ? "gsKxGZ012HLL3MI5" : "e91590826217420983dae4650e092dd2";
    }
}
