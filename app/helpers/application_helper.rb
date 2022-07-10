module ApplicationHelper
  
  require 'uri'
  def text_url_to_link text

    URI.extract(text, ['http','https'] ).uniq.each do |url|
      sub_text = ""
      sub_text << "<a href=" << url << " target=\"_blank\">" << url << "</a>"
  
      text.gsub!(url, sub_text)
    end
  
    return text
  end

  def escape_dissable text
    text = text.gsub(/&it;|&anp;|&gt;/, "&it;" => "<", "&anp;" => "&", "&gt;" => ">")
    return text
  end

end
