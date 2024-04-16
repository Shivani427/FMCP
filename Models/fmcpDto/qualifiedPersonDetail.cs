using System.ComponentModel.DataAnnotations;

namespace FMCP_.Models.fmcpDto
{
    public class qualifiedPersonDetail
    {
        //properties coming from user input

        [Key]
        public string? leeseRegNo { get; set; }
        public string? leeseName { get; set; }
        public string? leeseAddress { get; set; }
        public string? leeseStateDistrict { get; set; }

        public string? leeseEmail { get; set; }

        public string? leeseOfficePhone { get; set; }

        public int? leesePincode { get; set; }

        public byte? leeseFax { get; set; }
        public string? leeseMobile { get; set; }
        public char? category { get; set; }
        public string? qualifiedPersonName { get; set; }

        public string? personQualification { get; set; }


        public string? personExperience { get; set; }


        public string? personAddress { get; set; }

        public string? personMobile { get; set; }
        public string? personEmail { get; set; }
        public string? personFax { get; set; }
    }
}
