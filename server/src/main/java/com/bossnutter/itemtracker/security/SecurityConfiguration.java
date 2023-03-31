package com.bossnutter.itemtracker.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configurers.oauth2.server.resource.OAuth2ResourceServerConfigurer;
import org.springframework.security.web.SecurityFilterChain;

@Configuration

public class SecurityConfiguration {

    @Bean
    SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        System.out.println("HERE");
        http.httpBasic().disable();
        http.authorizeHttpRequests(requests -> requests
            .anyRequest()
            .authenticated()
        );
        http.oauth2ResourceServer(oauth2 -> oauth2.jwt());

        return http.build();
    }
}
