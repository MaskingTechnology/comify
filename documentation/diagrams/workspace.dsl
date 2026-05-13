workspace "Name" "Description" {

    !identifiers hierarchical

    model {
        // Content users
        cv = person "Content Viewer", "Views content anonymously"
        cc = person "Content Creator", "Views and creates content"
        cmo = person "Content Moderator", "Moderates the content"
        cma = person "Content Manager", "Monitors and manages content"

        // Event users
        emo = person "Event Moderator", "Selects event content"
        ema = person "Event Manager", "Creates, monitors and manages event content"

        // System users
        sm = person "System Manager", "Manages the system"

        ss = softwareSystem "Comify" {
            // Web applications
            swa = container "Social Web Application"
            mwa = container "Moderation Web Application"
            dwa = container "Dashboard Web Application"
            ewa = container "Event Web Application"
            awa = container "Administration Web Application"

            // Services
            cs = container "Content Service"
            ms = container "Moderation Service"
            is = container "Insights Service"
            es = container "Event Service"
            as = container "Administration Service"

            // Databases
            sdb = container "Social Database" {
                tags "Database"
            }
            mdb = container "Moderation Database" {
                tags "Database"
            }
            idb = container "Insights Database" {
                tags "Database"
            }
            edb = container "Events Database" {
                tags "Database"
            }
        }

        // Social (core) context relations
        cv -> ss.swa "Uses"
        cc -> ss.swa "Uses"
        ss.swa -> ss.cs "Uses"
        ss.cs -> ss.sdb "Reads from and writes to"

        // Moderation context relations
        cmo -> ss.mwa "Uses"
        ss.mwa -> ss.ms "Uses"
        ss.ms -> ss.mdb "Reads from and writes to"

        // Insights context relations
        cma -> ss.dwa "Uses"
        ss.dwa -> ss.is "Uses"
        ss.is -> ss.idb "Reads from and writes to"

        // Event context relations
        emo -> ss.ewa "Uses"
        ema -> ss.ewa "Uses"
        ss.ewa -> ss.es "Uses"
        ss.es -> ss.edb "Reads from and writes to"

        // Administration context relations
        sm -> ss.awa "Uses"
        ss.awa -> ss.as "Uses"
    }

    views {
        systemContext ss "Context" {
            include *
        }

        container ss "Container" {
            include *
        }

        styles {
            element "Element" {
                color #f88728
                stroke #f88728
                strokeWidth 7
                shape roundedbox
            }
            element "Person" {
                shape person
            }
            element "Database" {
                shape cylinder
            }
            element "Boundary" {
                strokeWidth 5
            }
            relationship "Relationship" {
                thickness 4
            }
        }
    }

    configuration {
        scope softwaresystem
    }

}