using InnmindsApi.Debugging;

namespace InnmindsApi
{
    public class InnmindsApiConsts
    {
        public const string LocalizationSourceName = "InnmindsApi";

        public const string ConnectionStringName = "Default";

        public const bool MultiTenancyEnabled = true;


        /// <summary>
        /// Default pass phrase for SimpleStringCipher decrypt/encrypt operations
        /// </summary>
        public static readonly string DefaultPassPhrase =
            DebugHelper.IsDebug ? "gsKxGZ012HLL3MI5" : "ac291b6b61714156b1ff14e1c38d142b";
    }
}
