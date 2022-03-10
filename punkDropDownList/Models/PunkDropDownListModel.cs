using Newtonsoft.Json;

namespace punkDropDownList.Models
{
    public class PunkDropDownListModel
    {
        [JsonProperty(PropertyName = "key")]
        public string Key { get; set; }

        [JsonProperty(PropertyName = "text")]
        public string Text { get; set; }
    }
}