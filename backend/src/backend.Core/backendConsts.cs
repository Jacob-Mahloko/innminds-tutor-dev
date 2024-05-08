using backend.Debugging;

namespace backend
{
    public class backendConsts
    {
        public const string LocalizationSourceName = "backend";

        public const string ConnectionStringName = "Default";

        public const bool MultiTenancyEnabled = true;


        /// <summary>
        /// Default pass phrase for SimpleStringCipher decrypt/encrypt operations
        /// </summary>
        public static readonly string DefaultPassPhrase =
            DebugHelper.IsDebug ? "gsKxGZ012HLL3MI5" : "df7bfff9d34745839a21ddb3bce5477a";
    }
}
